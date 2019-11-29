from keith.viewer.apps.analyzer.controller.controller import Controller
from keith.viewer.apps.analyzer.controller.function import ControllerFunction
from keith.viewer.apps.analyzer.service.okiden import OkidenService


class OkidenController(Controller):

    COMPANY_NAME = 'okiden'

    @classmethod
    def correct_data(cls, root_path, reflesh):
        json = ControllerFunction.get_param_json(root_path, cls.COMPANY_NAME)
        OkidenService.correct_data(json['url'], root_path, reflesh)
        count = OkidenService.count(root_path)
        return count