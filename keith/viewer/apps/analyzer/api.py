from django.http import JsonResponse
import os
import time

from keith.viewer.apps.analyzer.controller.hepco import HepcoController
from keith.viewer.apps.analyzer.controller.kepco import KepcoController
from keith.viewer.apps.analyzer.controller.kyuden import KyudenController
from keith.viewer.apps.analyzer.controller.okiden import OkidenController
from keith.viewer.apps.analyzer.controller.tepco import TepcoController

# http://127.0.0.1:8000/keith/analyzer/correct_data

def correct_data(request):
    # TODO:場合によっては、redisの使用も考えてみる。
    reflesh = False
    root_path = os.getcwd()
    start = time.time()

    data = {
        "message": "Success",
        "hepco_count": HepcoController.correct_data(root_path, reflesh),  # 北海道電力
        "tepco_count": TepcoController.correct_data(root_path, reflesh),  # 東京電力
        "kepco_count": KepcoController.correct_data(root_path, reflesh),  # 関西電力
        "kyuden_count": KyudenController.correct_data(root_path, reflesh),  # 九州電力
        "okiden_count": OkidenController.correct_data(root_path, reflesh),  # 沖縄電力
    }
    print(f'elapsed_time:{time.time() - start}[sec]')

    return JsonResponse(data)
