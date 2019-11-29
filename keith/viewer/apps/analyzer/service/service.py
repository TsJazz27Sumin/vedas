class Service(object):

    @classmethod
    def count(cls, root_path):
        raise NotImplementedError

    @classmethod
    def correct_data(cls, urls, root_path, reflesh):
        raise NotImplementedError

    @classmethod
    def __correct_ex_data(cls, root_path, feather_file_name, url, reflesh):
        raise NotImplementedError

    @classmethod
    def __process_ex_data(cls, original_feather_path, root_path, feather_file_name):
        raise NotImplementedError

    @classmethod
    def __merge_ex_data(cls, processed_feather_paths, root_path, feather_file_name):
        raise NotImplementedError

    @classmethod
    def __parse(cls, content):
        raise NotImplementedError
