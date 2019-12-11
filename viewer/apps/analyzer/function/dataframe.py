import pandas

from viewer.apps.analyzer.function.file import FileFunction


class DataFrameFunction(object):

    COMPANY_NAME_REPLACE_KEYWORD = '{COMPANY_NAME}'
    ORIGINAL_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/original'
    PROCESSED_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/processed'
    MERGED_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/merged'
    MERGED_CSV_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/merged_csv'

    @classmethod
    def get_data_frame_from_merged_pkl(cls, root_path, company_name):
        merged_pkl_path = FileFunction.get_merged_pkl_path(
            root_path,
            company_name
        )
        data_frame = pandas.read_pickle(merged_pkl_path)
        return data_frame

    @classmethod
    def get_data_frame_from_pkl(cls, original_pkl_path):
        return pandas.read_pickle(original_pkl_path)

    @classmethod
    def merge_ex_data(cls, processed_pkl_paths, root_path, company_name):

        data_frames = []
        for processed_pkl_path in processed_pkl_paths:
            data_frame = pandas.read_pickle(processed_pkl_path)
            data_frames.append(data_frame)

        merged_data_frame = pandas.concat(data_frames).sort_values(by='date_time', ascending=True).reset_index()
        del merged_data_frame['index']

        merged_pkl_path = FileFunction.get_merged_pkl_path(
            root_path,
            company_name
        )

        print(company_name)
        print(merged_data_frame[['date', 'time', 'demand', 'company', 'thermal', 'solar', 'total_supply_capacity']])

        # 日付にしておいた方が使いやすいので変換する。
        merged_data_frame['date'] = pandas.to_datetime(merged_data_frame['date'])
        # 時系列データを処理する様々な機能を使えるようにするためDatetimeIndexにする。
        merged_data_frame.set_index('date_time', inplace=True)
        merged_data_frame.to_pickle(merged_pkl_path)

        return merged_pkl_path

    @classmethod
    def create_date_and_time_from_datetime(cls, data_frame):
        data_frame["split"] = data_frame["date_time"].str.split(" ")
        data_frame["date"] = data_frame["split"].str.get(0)
        data_frame["time"] = data_frame["split"].str.get(1)
        del data_frame["split"]

    @classmethod
    def get_total_supply_capacity(cls, data_frame):

        sum_target_fields = [
            'nuclear',
            'thermal',
            'hydro',
            'geothermal',
            'biomass',
            'solar',
            'solar_output_control',
            'wind',
            'wind_output_control',
            'pumping',
            'interconnection'
        ]
        data_frame['total_supply_capacity'] = data_frame[sum_target_fields].sum(axis=1)
        return data_frame['total_supply_capacity']

    @classmethod
    def to_mwh(cls, data_frame):
        target_fields = [
            'demand',
            'nuclear',
            'thermal',
            'hydro',
            'geothermal',
            'biomass',
            'solar',
            'solar_output_control',
            'wind',
            'wind_output_control',
            'pumping',
            'interconnection',
            'total_supply_capacity'
        ]
        transform_value = 10
        for target_field in target_fields:
            data_frame[target_field] = data_frame[target_field] * transform_value

    @classmethod
    def generate_data_time_field(cls, data_frame):
        data_frame['date_time'] = data_frame['date'] + ' ' + data_frame['time']
        data_frame['date_time'] = data_frame['date_time'].astype(str).str.replace('  ', ' ')
        data_frame['date_time'] = pandas.to_datetime(data_frame['date_time'], format='%Y/%m/%d %H:%M')
