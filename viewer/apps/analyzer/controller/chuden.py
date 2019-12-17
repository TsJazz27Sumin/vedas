from viewer.apps.analyzer.controller.controller import Controller
from viewer.apps.analyzer.function.checker import CheckerFunction

from viewer.apps.analyzer.function.file import FileFunction
from viewer.apps.analyzer.service.chuden import ChudenService
from viewer.apps.analyzer.service.query import QueryService


class ChudenController(Controller):

    COMPANY_NAME = 'chuden'

    @classmethod
    def correct_data(cls, root_path, reflesh):
        check_result, message = cls.check_download_page(root_path)

        if check_result is False:
            return message, None

        json = FileFunction.get_param_json(root_path, cls.COMPANY_NAME)
        merged_pkl_path= ChudenService.correct_data(json['url'], root_path, reflesh)
        count = QueryService.count(root_path, cls.COMPANY_NAME)

        return count, merged_pkl_path

    @classmethod
    def count(cls, root_path):
        return QueryService.count(root_path, cls.COMPANY_NAME)

    @classmethod
    def get(cls, root_path, unit, from_value, to_value):
        return QueryService.get(root_path, cls.COMPANY_NAME, unit, from_value, to_value)

    @classmethod
    def get_daily_data(cls, root_path, unit, year_value, month_value, date_value):
        return QueryService.get_daily_data(root_path, cls.COMPANY_NAME, unit, year_value, month_value, date_value)

    @classmethod
    def check_download_page(cls, root_path):
        return CheckerFunction.check_download_page(root_path, cls.COMPANY_NAME, [])
