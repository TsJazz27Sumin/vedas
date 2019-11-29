import pandas


class ControllerFunction(object):

    @classmethod
    def get_param_json(cls, root_path, company):
        return pandas.read_json(open(f'{root_path}/apps/analyzer/param/{company}.json', 'r'))
