import pandas

from keith.viewer.apps.analyzer.function.file import FileFunction


class QueryService(object):

    @classmethod
    def count(cls, root_path, company_name):
        merged_feather_path = FileFunction.get_merged_feather_path(
            root_path,
            company_name
        )
        pkl_file = merged_feather_path.replace('.feather', '.pkl')
        data_frame = pandas.read_pickle(pkl_file)
        return len(data_frame.index)
