import requests
import pathlib
import pandas
from datetime import datetime


class CorrectService(object):

    @classmethod
    def count(cls, root_path):
        raise NotImplementedError

    @classmethod
    def execute(cls, urls, root_path, reflesh):
        raise NotImplementedError

    @classmethod
    def __correct_ex_data(cls, root_path, feather_file_name, url, reflesh):
        raise NotImplementedError

    @classmethod
    def __process_ex_data(cls, original_feather_path, root_path, feather_file_name):
        raise NotImplementedError

    @classmethod
    def __merge_ex_data(cls, processed_feather_paths, root_path, feather_file_name):
        raise NotImplementedError

    @classmethod
    def __parse(cls, content):
        raise NotImplementedError


class CorrectFunction(object):

    COMPANY_NAME_REPLACE_KEYWORD = '{COMPANY_NAME}'
    ORIGINAL_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/original'
    PROCESSED_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/processed'
    MERGED_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/merged'
    MERGED_CSV_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/merged_csv'

    @classmethod
    def count(cls, root_path, company_name):
        merged_feather_path = CorrectFunction.get_merged_feather_path(
            root_path,
            company_name
        )
        pkl_file = merged_feather_path.replace('.feather', '.pkl')
        data_frame = pandas.read_pickle(pkl_file)
        return len(data_frame.index)

    @classmethod
    def merge_ex_data(cls, processed_feather_paths, root_path, company_name):

        data_frames = []
        for processed_feather_path in processed_feather_paths:
            data_frame = pandas.read_feather(processed_feather_path)
            data_frames.append(data_frame)

        merged_data_frame = pandas.concat(data_frames).sort_values(by='Date Time', ascending=True).reset_index()
        del merged_data_frame['index']

        merged_feather_path = CorrectFunction.get_merged_feather_path(
            root_path,
            company_name
        )

        merged_csv_path = CorrectFunction.get_merged_csv_path(
            root_path,
            company_name
        )

        # print(df[(df['Date Time'] >= datetime(2019, 5, 3)) & (df['Date Time'] < datetime(2019, 5, 6))])
        print(merged_data_frame[['Date', 'Time', 'Demand', 'company', 'Thermal', 'Solar', 'Total Supply Capacity']])

        # 中間成果物としてfeatherを使っているが、現状、一部バグがあり保存できないので、ここではpickleを使う。
        # TODO:バグが解消されたらfeatherに統一したい。
        pkl_file = merged_feather_path.replace('.feather', '.pkl')
        merged_data_frame.to_pickle(pkl_file)
        df = pandas.read_pickle(pkl_file)
        # merged_data_frame.to_csv(merged_csv_path)

        return pkl_file

    @classmethod
    def create_date_and_time_from_datetime(cls, data_frame):
        data_frame["Split"] = data_frame["Date Time"].str.split(" ")
        data_frame["Date"] = data_frame["Split"].str.get(0)
        data_frame["Time"] = data_frame["Split"].str.get(1)
        del data_frame["Split"]

    @classmethod
    def get_total_supply_capacity(cls, data_frame):

        sum_target_fields = [
            'Nuclear',
            'Thermal',
            'Hydro',
            'Geothermal',
            'Biomass',
            'Solar',
            'Solar output control',
            'Wind',
            'Wind output control',
            'Pumping',
            'Interconnection'
        ]
        data_frame['Total Supply Capacity'] = data_frame[sum_target_fields].sum(axis=1)
        return data_frame['Total Supply Capacity']

    @classmethod
    def to_mwh(cls, data_frame):
        target_fields = [
            'Demand',
            'Nuclear',
            'Thermal',
            'Hydro',
            'Geothermal',
            'Biomass',
            'Solar',
            'Solar output control',
            'Wind',
            'Wind output control',
            'Pumping',
            'Interconnection',
            'Total Supply Capacity'
        ]
        transform_value = 10
        for target_field in target_fields:
            data_frame[target_field] = data_frame[target_field] * transform_value

    @classmethod
    def generate_data_time_field(cls, data_frame):
        data_frame['Date Time'] = data_frame['Date'] + ' ' + data_frame['Time']
        data_frame['Date Time'] = data_frame['Date Time'].astype(str).str.replace('  ', ' ')
        data_frame['Date Time'] = pandas.to_datetime(data_frame['Date Time'], format='%Y/%m/%d %H:%M')

    @classmethod
    def get_decoded_data(cls, url):
        response = requests.get(url).content
        return response.decode('sjis')

    @classmethod
    def get_original_feather_path(cls, root_path, company, feather_file_name):
        return cls.__get_feather_path(cls.ORIGINAL_FOLDER, root_path, company, feather_file_name)

    @classmethod
    def get_processed_feather_path(cls, root_path, company, feather_file_name):
        return cls.__get_feather_path(cls.PROCESSED_FOLDER, root_path, company, feather_file_name)

    @classmethod
    def get_merged_feather_path(cls, root_path, company):
        return cls.__get_feather_path(cls.MERGED_FOLDER, root_path, company, company + '.feather')

    @classmethod
    def get_merged_csv_path(cls, root_path, company):
        return cls.__get_feather_path(cls.MERGED_CSV_FOLDER, root_path, company, company + '.csv')

    @classmethod
    def __get_feather_path(cls, folder, root_path, company, feather_file_name):
        return f'{root_path}/{folder.replace(cls.COMPANY_NAME_REPLACE_KEYWORD, company)}/{feather_file_name}'

    @classmethod
    def create_feather_file(cls, feather_path, data_frame):
        pathlib.Path(feather_path)

        # Demandが欠損値のデータは使えないので削除しておく。
        data_frame = data_frame.dropna(subset=['Demand'])
        data_frame.to_feather(feather_path)

    @classmethod
    def get_feather_file_name(cls, url):
        split_urls = url.split('/')
        csv_file_name = split_urls[-1]
        # 北海道電力とかExcelもいるので対応しておく。
        return csv_file_name.replace('.csv', '.feather').replace('.xls', '.feather')
