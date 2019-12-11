from viewer.apps.analyzer.controller.controller import Controller
from viewer.apps.analyzer.function.checker import CheckerFunction

from viewer.apps.analyzer.function.file import FileFunction
from viewer.apps.analyzer.service.query import QueryService
from viewer.apps.analyzer.service.energia import EnergiaService


class EnergiaController(Controller):

    COMPANY_NAME = 'energia'

    @classmethod
    def correct_data(cls, root_path, reflesh):
        check_result, message = cls.check_download_page(root_path)

        if check_result is False:
            return message

        json = FileFunction.get_param_json(root_path, cls.COMPANY_NAME)
        EnergiaService.correct_data(json['url'], root_path, reflesh)
        count = QueryService.count(root_path, cls.COMPANY_NAME)
        return count

    @classmethod
    def count(cls, root_path):
        return QueryService.count(root_path, cls.COMPANY_NAME)

    @classmethod
    def get(cls, root_path, unit, from_value, to_value):
        return QueryService.get(root_path, cls.COMPANY_NAME, unit, from_value, to_value)

    @classmethod
    def check_download_page(cls, root_path):
        return CheckerFunction.check_download_page(root_path, cls.COMPANY_NAME)
