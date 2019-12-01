import io
import pandas
import os

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.server.apps.analyzer.function.file import FileFunction
from viewer.server.apps.analyzer.function.request import RequestFunction
from viewer.server.apps.analyzer.service.service import Service


class HepcoService(Service):
    COMPANY_NAME = 'hepco'
    JIKOKU = {
        '10時': '10:00',
        '11時': '11:00',
        '12時': '12:00',
        '13時': '13:00',
        '14時': '14:00',
        '15時': '15:00',
        '16時': '16:00',
        '17時': '17:00',
        '18時': '18:00',
        '19時': '19:00',
        '20時': '20:00',
        '21時': '21:00',
        '22時': '22:00',
        '23時': '23:00',
        '0時': '00:00',
        '1時': '01:00',
        '2時': '02:00',
        '3時': '03:00',
        '4時': '04:00',
        '5時': '05:00',
        '6時': '06:00',
        '7時': '07:00',
        '8時': '08:00',
        '9時': '09:00',
    }

    @classmethod
    def correct_data(cls, urls, root_path, reflesh):
        processed_pkl_paths = []

        for url in urls:
            try:
                feather_file_name = FileFunction.get_feather_file_name(url)
                original_feather_path = cls.__correct_ex_data(root_path, feather_file_name, url, reflesh)
                processed_pkl_path = cls.__process_ex_data(original_feather_path, root_path, feather_file_name)
                processed_pkl_paths.append(processed_pkl_path)
            except Exception as e:
                print(f'{feather_file_name} => {e}')
                raise e

        merged_feather_path = cls.merge_ex_data(processed_pkl_paths, root_path, cls.COMPANY_NAME)
        return merged_feather_path

    @classmethod
    def __correct_ex_data(cls, root_path, feather_file_name, url, reflesh):
        original_feather_path = FileFunction.get_original_feather_path(root_path, cls.COMPANY_NAME,
                                                                          feather_file_name)

        # 1個だけExcelがいるのでhepcoは、すべてpkl対応。
        original_feather_path = original_feather_path.replace('.feather', '.pkl')

        if reflesh or not os.path.exists(original_feather_path):
            if '.xls' in url:
                data_frame_from_xls = pandas.read_excel(url, header=None, index_col=None, skiprows=[0, 1, 2, 3])
                hepco_csv = cls.__create_hepco_csv_from_xls(data_frame_from_xls.to_csv(index=False))
                data_frame = cls.__parse_csv_from_xls(hepco_csv)
                FileFunction.create_pkl_file(original_feather_path, data_frame)
            else:
                decoded_data = FileFunction.get_decoded_data(url)
                # hepcoは、日時周りのフォーマットが他と違うので、csv読み込み前にデータ補正が必要。
                hepco_csv = cls.__get_hepco_csv(decoded_data)
                data_frame = cls.__parse(hepco_csv)
                FileFunction.create_pkl_file(original_feather_path, data_frame)

        return original_feather_path

    @classmethod
    def __create_hepco_csv_from_xls(cls, decoded_data):
        processed_data_list = []
        target_date = ''

        for i, data in enumerate(decoded_data.splitlines()):
            if i > 0:
                data = data.replace(' ', '')
                for k, v in cls.JIKOKU.items():
                    if k in data:
                        data = data.replace(k, v)
                        break

                items = data.split(',')

                if len(items[0]) != 0:
                    target_date = items[0]
                    data = ','.join(items[0:])
                else:
                    data = target_date + ',' + ','.join(items[1:])
                processed_data_list.append(data)

        hepco_csv = '\r'.join(processed_data_list)
        return hepco_csv

    @classmethod
    def __get_hepco_csv(cls, decoded_data):
        processed_data_list = []
        target_date = ''
        for i, data in enumerate(decoded_data.splitlines()):
            if i > 3:
                data = data.replace(' ', '')
                for k, v in cls.JIKOKU.items():
                    if k in data:
                        data = data.replace(k, v)
                        break

                items = data.split(',')

                if len(items[0]) != 0:
                    target_date = items[0]
                else:
                    data = target_date + data

                processed_data_list.append(data)
        hepco_csv = '\r'.join(processed_data_list)
        return hepco_csv

    @classmethod
    def __process_ex_data(cls, original_pkl_path, root_path, feather_file_name):
        data_frame = DataFrameFunction.get_data_frame_from_pkl(original_pkl_path)
        data_frame['company'] = cls.COMPANY_NAME

        # DateとTimeで分割されているので結合した項目を作る。
        DataFrameFunction.generate_data_time_field(data_frame)
        processed_feather_path = FileFunction.get_processed_feather_path(root_path, cls.COMPANY_NAME,
                                                                            feather_file_name)
        # 1個だけExcelがいるのでhepcoは、すべてpkl対応。
        processed_feather_path = processed_feather_path.replace('.feather', '.pkl')
        FileFunction.create_pkl_file(processed_feather_path, data_frame)

        return processed_feather_path

    @classmethod
    def merge_ex_data(cls, processed_pkl_paths, root_path, company_name):
        # 1個だけExcelがいるのでhepcoは、すべてpkl対応。
        data_frames = []
        for processed_pkl_path in processed_pkl_paths:
            data_frame = DataFrameFunction.get_data_frame_from_pkl(processed_pkl_path)
            data_frames.append(data_frame)

        merged_data_frame = pandas.concat(data_frames).sort_values(by='date_time', ascending=True).reset_index()
        del merged_data_frame['index']

        merged_pkl_path = FileFunction.get_merged_pkl_path(
            root_path,
            company_name
        )

        print(company_name)
        print(merged_data_frame[['date', 'time', 'demand', 'company', 'thermal', 'solar', 'total_supply_capacity']])

        # 時系列データを処理する様々な機能を使えるようにするためDatetimeIndexにする。
        merged_data_frame.set_index('date_time', inplace=True)
        merged_data_frame.to_pickle(merged_pkl_path)

        return merged_pkl_path

    @classmethod
    def __parse(cls, content):
        return pandas.read_csv(io.StringIO(content),
                               header=None,
                               skiprows=[],
                               lineterminator='\r',
                               na_values=[0],
                               names=[
                                   'date',
                                   'time',
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
                               )

    @classmethod
    def __parse_csv_from_xls(cls, csv_from_xls):
        return pandas.read_csv(io.StringIO(csv_from_xls),
                               header=None,
                               skiprows=[0],
                               na_values=[0],
                               names=[
                                   'date',
                                   'time',
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
                               )
