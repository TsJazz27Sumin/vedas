import io
import pandas
import os

from keith.viewer.apps.analyzer.service.function import ServiceFunction
from keith.viewer.apps.analyzer.service.service import Service


class OkidenService(Service):

    COMPANY_NAME = 'okiden'

    @classmethod
    def count(cls, root_path):
        return ServiceFunction.count(root_path, cls.COMPANY_NAME)

    @classmethod
    def correct_data(cls, urls, root_path, reflesh):
        processed_feather_paths = []

        for url in urls:
            feather_file_name = ServiceFunction.get_feather_file_name(url)
            original_feather_path = cls.__correct_ex_data(root_path, feather_file_name, url, reflesh)
            processed_feather_path = cls.__process_ex_data(original_feather_path, root_path, feather_file_name)
            processed_feather_paths.append(processed_feather_path)

        merged_feather_path = ServiceFunction.merge_ex_data(processed_feather_paths, root_path, cls.COMPANY_NAME)
        return merged_feather_path

    @classmethod
    def __correct_ex_data(cls, root_path, feather_file_name, url, reflesh):
        original_feather_path = ServiceFunction.get_original_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)

        if not reflesh and not os.path.exists(original_feather_path):
            decoded_data = ServiceFunction.get_decoded_data(url)
            # okidenは、空行が入っていたりするので、csv読み込み前にデータ補正が必要。
            okiden_csv = cls.__get_okiden_csv(decoded_data)
            data_frame = cls.__parse(okiden_csv)
            data_frame.reset_index()
            print(data_frame)
            data_frame.reset_index()
            ServiceFunction.create_feather_file(original_feather_path, data_frame)

        return original_feather_path

    @classmethod
    def __get_okiden_csv(cls, decoded_data):
        processed_data_list = []
        for i, data in enumerate(decoded_data.splitlines()):
            if i > 9:
                data = data.replace(' ', '').replace(',,', ',')
                processed_data_list.append(data[:-1])
        hepco_csv = '\r'.join(processed_data_list)
        return hepco_csv

    @classmethod
    def __process_ex_data(cls, original_feather_path, root_path, feather_file_name):
        data_frame = pandas.read_feather(original_feather_path)
        data_frame['service'] = cls.COMPANY_NAME

        # DateとTimeで分割されているので結合した項目を作る。
        ServiceFunction.generate_data_time_field(data_frame)
        data_frame.set_index('Date Time')

        # 沖縄にない電力項目は0で埋める。
        data_frame['Nuclear'] = 0
        data_frame['Geothermal'] = 0
        data_frame['Pumping'] = 0
        data_frame['Interconnection'] = 0

        processed_feather_path = ServiceFunction.get_processed_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)
        ServiceFunction.create_feather_file(processed_feather_path, data_frame)

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
                               # 'Nuclear',  # 沖縄は原子力がない。
                               'Thermal',
                               'Hydro',
                               # 'Geothermal', 沖縄は地熱がない。
                               'Biomass',
                               'Solar',
                               'Solar output control',
                               'Wind',
                               'Wind output control',
                               # 'Pumping', 沖縄は揚水がない。
                               # 'Interconnection', 沖縄は連系線がない。
                               'Total Supply Capacity'
                           ]
                           )
