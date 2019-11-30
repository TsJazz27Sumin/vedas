from keith.viewer.apps.analyzer.controller.controller import Controller

from keith.viewer.apps.analyzer.function.file import FileFunction
from keith.viewer.apps.analyzer.service.okiden import OkidenService
from keith.viewer.apps.analyzer.service.query import QueryService


class OkidenController(Controller):

    COMPANY_NAME = 'okiden'

    @classmethod
    def correct_data(cls, root_path, reflesh):
        json = FileFunction.get_param_json(root_path, cls.COMPANY_NAME)
        OkidenService.correct_data(json['url'], root_path, reflesh)
        count = QueryService.count(root_path, cls.COMPANY_NAME)
        return count