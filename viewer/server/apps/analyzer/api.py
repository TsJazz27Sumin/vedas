from django.http import JsonResponse
import os
import time
import json

from requests import Response

from viewer.server.apps.analyzer.controller.chuden import ChudenController
from viewer.server.apps.analyzer.controller.energia import EnergiaController
from viewer.server.apps.analyzer.controller.hepco import HepcoController
from viewer.server.apps.analyzer.controller.kepco import KepcoController
from viewer.server.apps.analyzer.controller.kyuden import KyudenController
from viewer.server.apps.analyzer.controller.okiden import OkidenController
from viewer.server.apps.analyzer.controller.rikuden import RikudenController
from viewer.server.apps.analyzer.controller.tepco import TepcoController

from viewer.server.apps.analyzer.controller.tohokuepco import TohokuEpcoController
from viewer.server.apps.analyzer.controller.yonden import YondenController


# http://127.0.0.1:8000/viewer/analyzer/correct_data
from viewer.server.apps.analyzer.decorator.auth import authenticate


@authenticate()
def correct_data(request, reflesh=True):
    # redisのインストールは、こちらを参考に。
    # redis-server
    # https://qiita.com/sawa-@github/items/1f303626bdc219ea8fa1
    root_path = os.getcwd()
    start = time.time()

    data = {
        "message": "Success",
        "01. hepco_count": HepcoController.correct_data(root_path, reflesh),  # 北海道電力 2016/4/1〜
        "02. tohokuepco_count": TohokuEpcoController.correct_data(root_path, reflesh),  # 東北電力 2016/4/1〜
        "03. rikuden_count": RikudenController.correct_data(root_path, reflesh),  # 北陸電力 2016/4/1〜
        "04. tepco_count": TepcoController.correct_data(root_path, reflesh),  # 東京電力 2016/4/1〜
        "05. chuden_count": ChudenController.correct_data(root_path, reflesh),  # 中部電力 2016/4/1〜
        "06. kepco_count": KepcoController.correct_data(root_path, reflesh),  # 関西電力 2016/4/1〜
        "07. energia_count": EnergiaController.correct_data(root_path, reflesh),  # 中国電力 2016/11/1〜
        "08. yonden_count": YondenController.correct_data(root_path, reflesh),  # 四国電力 2016/4/1〜
        "09. kyuden_count": KyudenController.correct_data(root_path, reflesh),  # 九州電力 2016/4/1〜
        "10. okiden_count": OkidenController.correct_data(root_path, reflesh),  # 沖縄電力 2016/4/1〜
    }
    print(f'elapsed_time:{time.time() - start}[sec]')

    return JsonResponse(data)


# http://127.0.0.1:8000/viewer/analyzer/count
@authenticate()
def count(request):

    root_path = os.getcwd()
    start = time.time()

    data = {
        "message": "Success",
        "01. hepco_count": HepcoController.count(root_path),  # 北海道電力 2016/4/1〜
        "02. tohokuepco_count": TohokuEpcoController.count(root_path),  # 東北電力 2016/4/1〜
        "03. rikuden_count": RikudenController.count(root_path),  # 北陸電力 2016/4/1〜
        "04. tepco_count": TepcoController.count(root_path),  # 東京電力 2016/4/1〜
        "05. chuden_count": ChudenController.count(root_path),  # 中部電力 2016/4/1〜
        "06. kepco_count": KepcoController.count(root_path),  # 関西電力 2016/4/1〜
        "07. energia_count": EnergiaController.count(root_path),  # 中国電力 2016/11/1〜
        "08. yonden_count": YondenController.count(root_path),  # 四国電力 2016/4/1〜
        "09. kyuden_count": KyudenController.count(root_path),  # 九州電力 2016/4/1〜
        "10. okiden_count": OkidenController.count(root_path),  # 沖縄電力 2016/4/1〜
    }
    print(f'elapsed_time:{time.time() - start}[sec]')

    return JsonResponse(data)

# http://127.0.0.1:8000/viewer/analyzer/get
@authenticate()
def get(request):
    term = request.GET.get(key="term", default="ym")
    root_path = os.getcwd()
    start = time.time()

    data = {
        "message": "Success",
        "hepco": HepcoController.get(root_path, term),  # 北海道電力 2016/4/1〜
        "tohokuepco": TohokuEpcoController.get(root_path, term),  # 東北電力 2016/4/1〜
        "rikuden": RikudenController.get(root_path, term),  # 北陸電力 2016/4/1〜
        "tepco": TepcoController.get(root_path, term),  # 東京電力 2016/4/1〜
        "chuden": ChudenController.get(root_path, term),  # 中部電力 2016/4/1〜
        "kepco": KepcoController.get(root_path, term),  # 関西電力 2016/4/1〜
        "energia": EnergiaController.get(root_path, term),  # 中国電力 2016/11/1〜
        "yonden": YondenController.get(root_path, term),  # 四国電力 2016/4/1〜
        "kyuden": KyudenController.get(root_path, term),  # 九州電力 2016/4/1〜
        "okiden": OkidenController.get(root_path, term)  # 沖縄電力 2016/4/1〜
    }
    print(f'elapsed_time:{time.time() - start}[sec]')

    return JsonResponse(data)
