import io
import pandas
import os

from company.common import CorrectService, CorrectFunction


class HepcoService(CorrectService):
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
        original_feather_path = CorrectFunction.get_original_feather_path(root_path, cls.COMPANY_NAME,
                                                                          feather_file_name)

        if not reflesh and not os.path.exists(original_feather_path):
            decoded_data = CorrectFunction.get_decoded_data(url)

            # hepcoは、日時周りのフォーマットが他と違うので、csv読み込み前にデータ補正が必要。
            hepco_csv = cls.__get_hepco_csv(decoded_data)
            data_frame = cls.__parse(hepco_csv)
            CorrectFunction.create_feather_file(original_feather_path, data_frame)

        return original_feather_path

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
        hepco_csv = '\n'.join(processed_data_list)
        return hepco_csv

    @classmethod
    def __process_ex_data(cls, original_feather_path, root_path, feather_file_name):
        data_frame = pandas.read_feather(original_feather_path)
        data_frame['company'] = cls.COMPANY_NAME

        # DateとTimeで分割されているので結合した項目を作る。
        CorrectFunction.generate_data_time_field(data_frame)
        data_frame.set_index('Date Time')

        # 2,500みたいなデータがあるので取り除く。
        data_frame['Demand'] = data_frame['Demand'].astype(str).str.replace(',', '').astype(int)
        data_frame['Total Supply Capacity'] = data_frame['Total Supply Capacity'].astype(str).str.replace(',',
                                                                                                          '').astype(
            int)

        processed_feather_path = CorrectFunction.get_processed_feather_path(root_path, cls.COMPANY_NAME,
                                                                            feather_file_name)
        CorrectFunction.create_feather_file(processed_feather_path, data_frame)

        return processed_feather_path

    @classmethod
    def __parse(cls, content):
        return pandas.read_csv(io.StringIO(content),
                               header=None,
                               skiprows=[0, 1, 2, 3, 4],
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
                                   'Interconnection',
                                   'Total Supply Capacity'
                               ]
                               )
