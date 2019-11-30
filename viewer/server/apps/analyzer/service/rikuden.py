import io
import os
import pandas

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.server.apps.analyzer.function.file import FileFunction
from viewer.server.apps.analyzer.function.request import RequestFunction
from viewer.server.apps.analyzer.service.service import Service


class RikudenService(Service):

    COMPANY_NAME = 'rikuden'

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
            # 末尾に余計な「,」が入っていることがあるので除去する。
            # スキップすべき行が違うこともあるので対応する。
            rikuden_csv = cls.__get_rikuden_csv(decoded_data)
            data_frame = cls.__parse(rikuden_csv)
            data_frame.reset_index()
            FileFunction.create_feather_file(original_feather_path, data_frame)

        return original_feather_path

    @classmethod
    def __get_rikuden_csv(cls, decoded_data):
        processed_data_list = []
        is_read_start = False

        for i, data in enumerate(decoded_data.splitlines()):
            if not is_read_start and '0:00' in data and '実績値' not in data:
                is_read_start = True

            if is_read_start:
                if data[-1] == ',':
                    data = data[:-1]
                processed_data_list.append(data)
        rikuden_csv = '\r'.join(processed_data_list)
        return rikuden_csv

    @classmethod
    def __process_ex_data(cls, original_feather_path, root_path, feather_file_name):
        data_frame = DataFrameFunction.get_data_frame_from_feather(original_feather_path)
        data_frame['Company'] = cls.COMPANY_NAME

        # DateとTimeで分割されているので結合した項目を作る。
        DataFrameFunction.generate_data_time_field(data_frame)
        data_frame.set_index('Date Time')

        # TOTAL算出 Total Supply Capacity
        data_frame['Total Supply Capacity'] = DataFrameFunction.get_total_supply_capacity(data_frame)

        processed_feather_path = FileFunction.get_processed_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)
        FileFunction.create_feather_file(processed_feather_path, data_frame)

        return processed_feather_path

    @classmethod
    def __parse(cls, content):
        return pandas.read_csv(io.StringIO(content),
                           header=None,
                           skiprows=[],
                           na_values=['-'],
                           names=[
                               'Date',
                               'Time',
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
                               'Interconnection'
                           ]
                           )
