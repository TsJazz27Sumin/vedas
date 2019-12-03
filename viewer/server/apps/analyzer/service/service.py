class Service(object):

    @classmethod
    def correct_data(cls, urls, root_path, reflesh):
        raise NotImplementedError

    @classmethod
    def __correct_ex_data(cls, root_path, pkl_file_name, url, reflesh):
        raise NotImplementedError

    @classmethod
    def __process_ex_data(cls, original_pkl_path, root_path, pkl_file_name):
        raise NotImplementedError

    @classmethod
    def __merge_ex_data(cls, processed_pkl_paths, root_path, pkl_file_name):
        raise NotImplementedError

    @classmethod
    def __parse(cls, content):
        raise NotImplementedError
