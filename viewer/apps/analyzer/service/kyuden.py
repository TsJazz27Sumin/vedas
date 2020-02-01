import io
import pandas
import os

from viewer.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.apps.analyzer.function.file import FileFunction
from viewer.apps.analyzer.service.service import Service


class KyudenService(Service):

    COMPANY_NAME = 'kyuden'
    ROOT_URL = 'http://www.kyuden.co.jp/var/rev0/0238/'
    KEY_NUMBER = 8215

    @classmethod
    def correct_data(cls, urls, root_path, reflesh):
        processed_pkl_paths = []
        number = cls.KEY_NUMBER

        for url in urls:
            try:
                target_url = f'{cls.ROOT_URL}{number}/{url}'
                pkl_file_name = FileFunction.get_pkl_file_name(target_url)
                original_pkl_path = cls.__correct_ex_data(root_path, pkl_file_name, target_url, reflesh)
                processed_pkl_path = cls.__process_ex_data(original_pkl_path, root_path, pkl_file_name)
                processed_pkl_paths.append(processed_pkl_path)
                number = number + 1
            except Exception as e:
                print(f'{pkl_file_name} => {e}')
                raise e

        merged_pkl_path = DataFrameFunction.merge_ex_data(processed_pkl_paths, root_path, cls.COMPANY_NAME)
        return merged_pkl_path

    @classmethod
    def __correct_ex_data(cls, root_path, pkl_file_name, url, reflesh):
        original_pkl_path = FileFunction.get_original_pkl_path(root_path, cls.COMPANY_NAME, pkl_file_name)

        if reflesh or not os.path.exists(original_pkl_path):
            decoded_data = FileFunction.get_decoded_data(url)
            data_frame = cls.__parse(decoded_data)
            FileFunction.create_pkl_file(original_pkl_path, data_frame)

        return original_pkl_path

    @classmethod
    def __process_ex_data(cls, original_pkl_path, root_path, pkl_file_name):
        data_frame = DataFrameFunction.get_data_frame_from_pkl(original_pkl_path)
        data_frame['company'] = cls.COMPANY_NAME

        # Kyudenは、日時で持っているのでTepcoに合わせて分割する。
        DataFrameFunction.create_date_and_time_from_datetime(data_frame)

        # 2,500みたいなデータがあるので取り除く。
        data_frame['demand'] = data_frame['demand'].astype(str).str.replace(',', '').astype(float)

        # 後続で計算できないのでfloatに変換している。
        data_frame['nuclear'] = data_frame['nuclear'].astype(str).str.replace(',', '').astype(float)
        data_frame['thermal'] = data_frame['thermal'].astype(str).str.replace(',', '').astype(float)
        data_frame['solar_output_control'] = data_frame['solar_output_control'].astype(str).str.replace('None', '0')
        data_frame['solar_output_control'] = data_frame['solar_output_control'].str.replace('nan', '0')
        data_frame['solar_output_control'] = data_frame['solar_output_control'].str.replace(',', '')
        data_frame['solar_output_control'] = data_frame['solar_output_control'].astype(float)
        data_frame['pumping'] = data_frame['pumping'].astype(str).str.replace('None', '0')
        data_frame['pumping'] = data_frame['pumping'].str.replace('nan', '0')
        data_frame['pumping'] = data_frame['pumping'].str.replace(',', '')
        data_frame['pumping'] = data_frame['pumping'].astype(float)
        data_frame['interconnection'] = data_frame['interconnection'].astype(str).str.replace('None', '0')
        data_frame['interconnection'] = data_frame['interconnection'].str.replace('nan', '0')
        data_frame['interconnection'] = data_frame['interconnection'].str.replace(',', '')
        data_frame['interconnection'] = data_frame['interconnection'].astype(float)

        # Date型に変換しておく。
        data_frame['date_time'] = pandas.to_datetime(data_frame['date_time'], format='%Y/%m/%d %H:%M')

        # TOTAL算出 Total Supply Capacity
        data_frame['total_supply_capacity'] = DataFrameFunction.get_total_supply_capacity(data_frame)

        processed_pkl_path = FileFunction.get_processed_pkl_path(root_path, cls.COMPANY_NAME, pkl_file_name)
        FileFunction.create_pkl_file(processed_pkl_path, data_frame)

        return processed_pkl_path

    @classmethod
    def __parse(cls, content):
        return pandas.read_csv(io.StringIO(content),
                           header=None,
                           skiprows=[0, 1],
                           na_values=[0],
                           names=[
                               'date_time',
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
                               'interconnection'
                           ]
                           )
