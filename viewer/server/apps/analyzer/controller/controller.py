class Controller(object):

    @classmethod
    def correct_data(cls, root_path, reflesh):
        raise NotImplementedError

    @classmethod
    def count(cls, root_path):
        raise NotImplementedError

    @classmethod
    def get(cls, root_path):
        raise NotImplementedError