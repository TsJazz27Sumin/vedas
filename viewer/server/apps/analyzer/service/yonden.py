import io
import pandas
import os

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.server.apps.analyzer.function.file import FileFunction
from viewer.server.apps.analyzer.function.request import RequestFunction
from viewer.server.apps.analyzer.service.service import Service


class YondenService(Service):

    COMPANY_NAME = 'yonden'

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
            data_frame_from_xls = pandas.read_excel(url, header=None, index_col=None, skiprows=[0, 1, 2, 3, 4, 5, 6, 7, 8])
            # 最終行は不要なので削除する。
            data_frame_from_xls.drop(data_frame_from_xls.tail(1).index, inplace=True)
            # Excelから読み込みやすいフォーマットに加工する。
            yonden_csv = cls.__create_yonden_csv_from_xls(data_frame_from_xls.to_csv(index=False))
            data_frame = cls.__parse(yonden_csv)
            print(data_frame)
            FileFunction.create_feather_file(original_feather_path, data_frame)

        return original_feather_path

    @classmethod
    def __create_yonden_csv_from_xls(cls, decoded_data):
        processed_data_list = []

        for i, data in enumerate(decoded_data.splitlines()):
            items = data.split(',')
            items[0] = items[0].replace(' 00:00:00', '')
            data = ','.join(items[0:])
            processed_data_list.append(data)

        yonden_csv = '\r'.join(processed_data_list)
        return yonden_csv

    @classmethod
    def __process_ex_data(cls, original_feather_path, root_path, feather_file_name):
        data_frame = DataFrameFunction.get_data_frame_from_feather(original_feather_path)
        data_frame['company'] = cls.COMPANY_NAME

        # DateとTimeで分割されているので結合した項目を作る。
        DataFrameFunction.generate_data_time_field(data_frame)
        data_frame.set_index('date_time')

        # 後続で計算できないのでfloatに変換している。
        # 地熱がハイフンなので0扱いにする。
        data_frame['geothermal'] = data_frame['geothermal'].astype(str).str.replace('－', '0').astype(float)

        # 他の電力に合わせて万kwからMWhに揃える。
        DataFrameFunction.to_mwh(data_frame)

        processed_feather_path = FileFunction.get_processed_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)
        FileFunction.create_feather_file(processed_feather_path, data_frame)

        return processed_feather_path

    @classmethod
    def __parse(cls, content):
        return pandas.read_csv(io.StringIO(content),
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
