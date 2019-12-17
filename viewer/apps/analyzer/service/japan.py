from viewer.apps.analyzer.function.dataframe import DataFrameFunction


class JapanService(object):

    COMPANY_NAME = 'japan'

    @classmethod
    def correct_data(cls, root_path, merged_pkl_path_list):
        DataFrameFunction.merge_japan_data(root_path, cls.COMPANY_NAME, merged_pkl_path_list)
