import io
import pandas
import os

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.server.apps.analyzer.function.file import FileFunction
from viewer.server.apps.analyzer.function.request import RequestFunction
from viewer.server.apps.analyzer.service.service import Service


class KepcoService(Service):

    COMPANY_NAME = 'kepco'

    @classmethod
    def correct_data(cls, urls, root_path, reflesh):
        processed_pkl_paths = []

        for url in urls:
            try:
                pkl_file_name = FileFunction.get_pkl_file_name(url)
                original_pkl_path = cls.__correct_ex_data(root_path, pkl_file_name, url, reflesh)
                processed_pkl_path = cls.__process_ex_data(original_pkl_path, root_path, pkl_file_name)
                processed_pkl_paths.append(processed_pkl_path)
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

        # Kepcoは、日時で持っているのでTepcoに合わせて分割する。
        DataFrameFunction.create_date_and_time_from_datetime(data_frame)

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
