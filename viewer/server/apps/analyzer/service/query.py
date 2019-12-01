import json

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction


class QueryService(object):

    @classmethod
    def count(cls, root_path, company_name):
        data_frame = DataFrameFunction.get_data_frame_from_pkl(root_path, company_name)
        return len(data_frame.index)

    @classmethod
    def get(cls, root_path, company_name):
        data_frame = DataFrameFunction.get_data_frame_from_pkl(root_path, company_name)
        df_ym = data_frame.set_index([data_frame.index.year, data_frame.index.month])
        df_ym.index.names = ['year', 'month']
        df_ym.sort_index(inplace=True)

        # print(company_name)
        # print(df_ym.columns)
        # print(df_ym)
        result = df_ym.sum(
            level=['year', 'month']
        )[
            [
                'demand',
                # 'nuclear',
                # 'thermal',
                'hydro',
                # 'geothermal',
                'biomass',
                'solar',
                # 'solar_output_control',
                'wind',
                # 'wind_output_control',
                # 'pumping',
                # 'interconnection',
                'total_supply_capacity'
            ]
        ].to_json()

        return json.loads(result)
