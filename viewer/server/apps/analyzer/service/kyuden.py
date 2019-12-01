import io
import pandas
import os

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.server.apps.analyzer.function.file import FileFunction
from viewer.server.apps.analyzer.service.service import Service


class KyudenService(Service):

    COMPANY_NAME = 'kyuden'

    @classmethod
    def correct_data(cls, urls, root_path, reflesh):
        processed_feather_paths = []

        for url in urls:
            try:
                feather_file_name = FileFunction.get_feather_file_name(url)
                original_feather_path = cls.__correct_ex_data(root_path, feather_file_name, url, reflesh)
                processed_feather_path = cls.__process_ex_data(original_feather_path, root_path, feather_file_name)
                processed_feather_paths.append(processed_feather_path)
            except Exception as e:
                print(f'{feather_file_name} => {e}')
                raise e

        merged_feather_path = DataFrameFunction.merge_ex_data(processed_feather_paths, root_path, cls.COMPANY_NAME)
        return merged_feather_path

    @classmethod
    def __correct_ex_data(cls, root_path, feather_file_name, url, reflesh):
        original_feather_path = FileFunction.get_original_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)

        if reflesh or not os.path.exists(original_feather_path):
            decoded_data = FileFunction.get_decoded_data(url)
            data_frame = cls.__parse(decoded_data)
            FileFunction.create_feather_file(original_feather_path, data_frame)

        return original_feather_path

    @classmethod
    def __process_ex_data(cls, original_feather_path, root_path, feather_file_name):
        data_frame = DataFrameFunction.get_data_frame_from_feather(original_feather_path)
        data_frame['company'] = cls.COMPANY_NAME

        # Kyudenは、日時で持っているのでTepcoに合わせて分割する。
        DataFrameFunction.create_date_and_time_from_datetime(data_frame)

        # 2,500みたいなデータがあるので取り除く。
        data_frame['demand'] = data_frame['demand'].astype(str).str.replace(',', '').astype(float)

        # 後続で計算できないのでfloatに変換している。
        data_frame['nuclear'] = data_frame['nuclear'].astype(str).str.replace(',', '').astype(float)
        data_frame['thermal'] = data_frame['thermal'].astype(str).str.replace(',', '').astype(float)
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

        processed_feather_path = FileFunction.get_processed_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)
        FileFunction.create_feather_file(processed_feather_path, data_frame)

        return processed_feather_path

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
