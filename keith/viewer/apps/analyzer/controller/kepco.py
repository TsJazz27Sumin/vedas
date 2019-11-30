import time

from keith.viewer.apps.analyzer.controller.controller import Controller
from keith.viewer.apps.analyzer.function import measurement

from keith.viewer.apps.analyzer.function.file import FileFunction
from keith.viewer.apps.analyzer.function.measurement import MeasurementFunction
from keith.viewer.apps.analyzer.service.kepco import KepcoService
from keith.viewer.apps.analyzer.service.query import QueryService


class KepcoController(Controller):

    COMPANY_NAME = 'kepco'

    @classmethod
    def correct_data(cls, root_path, reflesh):
        start = time.time()
        json = FileFunction.get_param_json(root_path, cls.COMPANY_NAME)
        MeasurementFunction.rap(start)
        KepcoService.correct_data(json['url'], root_path, reflesh)
        MeasurementFunction.rap(start)
        count = QueryService.count(root_path, cls.COMPANY_NAME)
        MeasurementFunction.rap(start)
        return count

    @classmethod
    def count(cls, root_path, reflesh):
        return QueryService.count(root_path, cls.COMPANY_NAME)