class Controller(object):

    @classmethod
    def correct_data(cls, root_path, reflesh):
        raise NotImplementedError

    @classmethod
    def count(cls, root_path):
        raise NotImplementedError

    @classmethod
    def get(cls, root_path, term):
        raise NotImplementedError

    @classmethod
    def get_daily_data(cls, root_path, unit, year_value, month_value, date_value):
        raise NotImplementedError

    @classmethod
    def check_download_page(cls, root_path):
        raise NotImplementedError