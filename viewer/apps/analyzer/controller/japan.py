from viewer.apps.analyzer.controller.controller import Controller
from viewer.apps.analyzer.service.japan import JapanService
from viewer.apps.analyzer.service.query import QueryService


class JapanController(object):

    COMPANY_NAME = 'japan'

    @classmethod
    def correct_data(cls, root_path, merged_pkl_path_list):
        JapanService.correct_data(root_path, merged_pkl_path_list)
        count = QueryService.count(root_path, cls.COMPANY_NAME)
        return count

    @classmethod
    def count(cls, root_path):
        return QueryService.count(root_path, cls.COMPANY_NAME)

    @classmethod
    def get(cls, root_path, unit, from_value, to_value):
        return QueryService.get(root_path, cls.COMPANY_NAME, unit, from_value, to_value)

    @classmethod
    def get_daily_data(cls, root_path, unit, year_value, month_value, date_value):
        return QueryService.get_daily_data(root_path, cls.COMPANY_NAME, unit, year_value, month_value, date_value)
