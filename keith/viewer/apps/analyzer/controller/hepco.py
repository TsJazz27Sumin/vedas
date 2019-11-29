from keith.viewer.apps.analyzer.controller.controller import Controller
from keith.viewer.apps.analyzer.controller.function import ControllerFunction
from keith.viewer.apps.analyzer.service.hepco import HepcoService


class HepcoController(Controller):

    COMPANY_NAME = 'hepco'

    @classmethod
    def correct_data(cls, root_path, reflesh):
        json = ControllerFunction.get_param_json(root_path, cls.COMPANY_NAME)
        HepcoService.correct_data(json['url'], root_path, reflesh)
        count = HepcoService.count(root_path)
        return count