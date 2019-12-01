import json

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.server.apps.analyzer.function.file import FileFunction


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

        merged_csv_path = FileFunction.get_merged_csv_path(
            root_path,
            company_name
        )

        print(company_name)
        print(df_ym.columns)
        print(df_ym)

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
                    # 'solar_output_control',
                    'wind',
                    # 'wind_output_control',
                    'pumping',
                    'interconnection',
                    'total_supply_capacity'
                ]
            ].to_json()
        except Exception as e:
            df_ym.to_csv(merged_csv_path)
            raise e


        return json.loads(result)
