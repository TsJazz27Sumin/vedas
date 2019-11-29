from keith.viewer.apps.analyzer.controller.controller import Controller
from keith.viewer.apps.analyzer.controller.function import ControllerFunction
from keith.viewer.apps.analyzer.service.kyuden import KyudenService


class KyudenController(Controller):

    @classmethod
    def correct_data(cls, root_path, reflesh):
        json = ControllerFunction.get_param_json(root_path, 'kyuden')
        KyudenService.correct_data(json['url'], root_path, reflesh)
        count = KyudenService.count(root_path)
        return count