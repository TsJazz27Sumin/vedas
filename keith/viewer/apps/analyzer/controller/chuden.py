import time

from keith.viewer.apps.analyzer.controller.controller import Controller

from keith.viewer.apps.analyzer.function.file import FileFunction
from keith.viewer.apps.analyzer.function.measurement import MeasurementFunction
from keith.viewer.apps.analyzer.service.chuden import ChudenService
from keith.viewer.apps.analyzer.service.query import QueryService


class ChudenController(Controller):

    COMPANY_NAME = 'chuden'

    @classmethod
    def correct_data(cls, root_path, reflesh):
        start = time.time()
        json = FileFunction.get_param_json(root_path, cls.COMPANY_NAME)
        MeasurementFunction.rap(start)
        ChudenService.correct_data(json['url'], root_path, reflesh)
        MeasurementFunction.rap(start)
        count = QueryService.count(root_path, cls.COMPANY_NAME)
        MeasurementFunction.rap(start)
        return count