from django.http import JsonResponse
import os
import time

from keith.viewer.apps.analyzer.controller.energia import EnergiaController
from keith.viewer.apps.analyzer.controller.hepco import HepcoController
from keith.viewer.apps.analyzer.controller.kepco import KepcoController
from keith.viewer.apps.analyzer.controller.kyuden import KyudenController
from keith.viewer.apps.analyzer.controller.okiden import OkidenController
from keith.viewer.apps.analyzer.controller.rikuden import RikudenController
from keith.viewer.apps.analyzer.controller.tepco import TepcoController

# http://127.0.0.1:8000/keith/analyzer/correct_data
from keith.viewer.apps.analyzer.controller.yonden import YondenController


def correct_data(request):
    # redisのインストールは、こちらを参考に。
    # https://qiita.com/sawa-@github/items/1f303626bdc219ea8fa1
    reflesh = False
    root_path = os.getcwd()
    start = time.time()

    data = {
        "message": "Success",
        "hepco_count": HepcoController.correct_data(root_path, reflesh),  # 北海道電力
        "rikuden_count": RikudenController.correct_data(root_path, reflesh),  # 北陸電力
        "tepco_count": TepcoController.correct_data(root_path, reflesh),  # 東京電力
        "kepco_count": KepcoController.correct_data(root_path, reflesh),  # 関西電力
        "energia_count": EnergiaController.correct_data(root_path, reflesh),  # 中国電力
        "yonden_count": YondenController.correct_data(root_path, reflesh),  # 四国電力
        "kyuden_count": KyudenController.correct_data(root_path, reflesh),  # 九州電力
        "okiden_count": OkidenController.correct_data(root_path, reflesh),  # 沖縄電力
    }
    print(f'elapsed_time:{time.time() - start}[sec]')

    return JsonResponse(data)
