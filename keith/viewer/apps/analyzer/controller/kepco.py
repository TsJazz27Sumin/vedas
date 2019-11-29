from keith.viewer.apps.analyzer.controller.controller import Controller
from keith.viewer.apps.analyzer.controller.function import ControllerFunction
from keith.viewer.apps.analyzer.service.kepco import KepcoService


class KepcoController(Controller):

    COMPANY_NAME = 'kepco'

    @classmethod
    def correct_data(cls, root_path, reflesh):
        json = ControllerFunction.get_param_json(root_path, cls.COMPANY_NAME)
        KepcoService.correct_data(json['url'], root_path, reflesh)
        count = KepcoService.count(root_path)
        return count