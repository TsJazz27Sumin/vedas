import json
from datetime import datetime

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.server.apps.analyzer.function.file import FileFunction


class QueryService(object):

    @classmethod
    def count(cls, root_path, company_name):
        data_frame = DataFrameFunction.get_data_frame_from_merged_pkl(root_path, company_name)
        return len(data_frame.index)

    @classmethod
    def get(cls, root_path, company_name, term):
        data_frame = DataFrameFunction.get_data_frame_from_merged_pkl(root_path, company_name)

        result = None

        if term == 'y':
            result = cls.sum_group_by_year(data_frame)
        elif term == 'ym':
            result = cls.sum_group_by_year_and_month(data_frame)
        elif term == 'ymd':
            result = cls.sum_group_by_year_and_month_and_date(data_frame)

        return json.loads(result)

    @classmethod
    def sum_group_by_year_and_month_and_date(cls, data_frame):
        data_frame = data_frame[data_frame['date'] >= datetime(2019, 10, 1)]
        data_frame['date_string'] = data_frame['date'].dt.strftime('%Y/%m/%d')
        df_ymd = data_frame.set_index([data_frame.index.year, data_frame.index.month, data_frame.index.date])
        df_ymd.index.names = ['year', 'month', 'date_string']
        df_ymd.sort_index(inplace=True)

        try:
            result = df_ymd.sum(
                level=['date_string']
            )[
                [
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
            ].to_json(date_format='iso').replace('T00:00:00.000Z', '')
        except Exception as e:
            raise e
        return result

    @classmethod
    def sum_group_by_year_and_month(cls, data_frame):
        df_ym = data_frame.set_index([data_frame.index.year, data_frame.index.month])
        df_ym.index.names = ['year', 'month']
        df_ym.sort_index(inplace=True)

        try:
            result = df_ym.sum(
                level=['year', 'month']
            )[
                [
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
            ].to_json()
        except Exception as e:
            raise e
        return result

    @classmethod
    def sum_group_by_year(cls, data_frame):
        df_y = data_frame.set_index([data_frame.index.year])
        df_y.index.names = ['year']
        df_y.sort_index(inplace=True)

        try:
            result = df_y.sum(
                level=['year']
            )[
                [
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
            ].to_json()
        except Exception as e:
            raise e
        return result
