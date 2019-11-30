import pandas
import json

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction


class QueryService(object):

    @classmethod
    def count(cls, root_path, company_name):
        data_frame = DataFrameFunction.get_data_frame_from_pkl(root_path, company_name)
        return len(data_frame.index)

    @classmethod
    def solar(cls, root_path, company_name):
        data_frame = DataFrameFunction.get_data_frame_from_pkl(root_path, company_name)
        print(data_frame['Demand'])
        df_ym = data_frame.set_index([data_frame.index.year, data_frame.index.month])
        df_ym.index.names = ['year', 'month']
        df_ym.sort_index(inplace=True)
        result = df_ym.sum(level=['year', 'month'])[['Demand', 'Solar']].to_json()
        # TODO: React側で必要な形がわからんので素の状態で返しておく。
        # result = result.replace('[', '').replace(']', '').replace('\\', '')
        # TODO:try lower
        return result.lower()
