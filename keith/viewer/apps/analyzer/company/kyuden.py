import io
import pandas
import os

from keith.viewer.apps.analyzer.company.common import CorrectService, CorrectFunction


class KyudenService(CorrectService):

    COMPANY_NAME = 'kyuden'

    @classmethod
    def count(cls, root_path):
        return CorrectFunction.count(root_path, cls.COMPANY_NAME)

    @classmethod
    def execute(cls, urls, root_path, reflesh):
        processed_feather_paths = []

        for url in urls:
            feather_file_name = CorrectFunction.get_feather_file_name(url)
            original_feather_path = cls.__correct_ex_data(root_path, feather_file_name, url, reflesh)
            processed_feather_path = cls.__process_ex_data(original_feather_path, root_path, feather_file_name)
            processed_feather_paths.append(processed_feather_path)

        merged_feather_path = CorrectFunction.merge_ex_data(processed_feather_paths, root_path, cls.COMPANY_NAME)
        return merged_feather_path

    @classmethod
    def __correct_ex_data(cls, root_path, feather_file_name, url, reflesh):
        original_feather_path = CorrectFunction.get_original_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)

        if not reflesh and not os.path.exists(original_feather_path):
            decoded_data = CorrectFunction.get_decoded_data(url)
            data_frame = cls.__parse(decoded_data)
            CorrectFunction.create_feather_file(original_feather_path, data_frame)

        return original_feather_path

    @classmethod
    def __process_ex_data(cls, original_feather_path, root_path, feather_file_name):
        data_frame = pandas.read_feather(original_feather_path)
        data_frame['company'] = cls.COMPANY_NAME

        # Kyudenは、日時で持っているのでTepcoに合わせて分割する。
        CorrectFunction.create_date_and_time_from_datetime(data_frame)

        # Date型に変換しておく。
        data_frame['Date Time'] = pandas.to_datetime(data_frame['Date Time'], format='%Y/%m/%d %H:%M')

        # TOTAL算出 Total Supply Capacity
        data_frame['Total Supply Capacity'] = CorrectFunction.get_total_supply_capacity(data_frame)

        processed_feather_path = CorrectFunction.get_processed_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)
        CorrectFunction.create_feather_file(processed_feather_path, data_frame)

        return processed_feather_path

    @classmethod
    def __parse(cls, content):
        return pandas.read_csv(io.StringIO(content),
                           header=None,
                           skiprows=[0, 1],
                           na_values=['-'],
                           names=[
                               'Date Time',
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
