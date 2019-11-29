from keith.viewer.apps.analyzer.controller.controller import Controller
from keith.viewer.apps.analyzer.controller.function import ControllerFunction
from keith.viewer.apps.analyzer.service.tepco import TepcoService


class TepcoController(Controller):

    @classmethod
    def correct_data(cls, root_path, reflesh):
        json = ControllerFunction.get_param_json(root_path, 'tepco')
        TepcoService.correct_data(json['url'], root_path, reflesh)
        count = TepcoService.count(root_path)
        return count