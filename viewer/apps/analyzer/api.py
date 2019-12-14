from django.http import JsonResponse
import os
import time

from viewer.apps.analyzer.controller.chuden import ChudenController
from viewer.apps.analyzer.controller.energia import EnergiaController
from viewer.apps.analyzer.controller.hepco import HepcoController
from viewer.apps.analyzer.controller.kepco import KepcoController
from viewer.apps.analyzer.controller.kyuden import KyudenController
from viewer.apps.analyzer.controller.okiden import OkidenController
from viewer.apps.analyzer.controller.rikuden import RikudenController
from viewer.apps.analyzer.controller.tepco import TepcoController

from viewer.apps.analyzer.controller.tohokuepco import TohokuEpcoController
from viewer.apps.analyzer.controller.yonden import YondenController
from viewer.apps.analyzer.decorator.auth import authenticate

# http://d190d5rjx2yi3y.cloudfront.net/
# http://52.196.187.98:8000/viewer/analyzer/correct_data
# http://127.0.0.1:8000/viewer/analyzer/correct_data


@authenticate()
def correct_data(request, reflesh=True):
    # TODO:IPでアクセス制限するだけなので、どこかで認証を手厚くすることを検討。
    # redisのインストールは、こちらを参考に。
    # redis-server
    # https://qiita.com/sawa-@github/items/1f303626bdc219ea8fa1
    root_path = os.getcwd()
    start = time.time()

    data = {
        "message": "Success",
        "01. hepco_count": HepcoController.correct_data(root_path, reflesh),
        "02. tohokuepco_count": TohokuEpcoController.correct_data(root_path, reflesh),
        "03. rikuden_count": RikudenController.correct_data(root_path, reflesh),
        "04. tepco_count": TepcoController.correct_data(root_path, reflesh),
        "05. chuden_count": ChudenController.correct_data(root_path, reflesh),
        "06. kepco_count": KepcoController.correct_data(root_path, reflesh),
        "07. energia_count": EnergiaController.correct_data(root_path, reflesh),
        "08. yonden_count": YondenController.correct_data(root_path, reflesh),
        "09. kyuden_count": KyudenController.correct_data(root_path, reflesh),
        "10. okiden_count": OkidenController.correct_data(root_path, reflesh),
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
        "01. hepco_count": HepcoController.count(root_path),
        "02. tohokuepco_count": TohokuEpcoController.count(root_path),
        "03. rikuden_count": RikudenController.count(root_path),
        "04. tepco_count": TepcoController.count(root_path),
        "05. chuden_count": ChudenController.count(root_path),
        "06. kepco_count": KepcoController.count(root_path),
        "07. energia_count": EnergiaController.count(root_path),
        "08. yonden_count": YondenController.count(root_path),
        "09. kyuden_count": KyudenController.count(root_path),
        "10. okiden_count": OkidenController.count(root_path),
    }
    print(f'elapsed_time:{time.time() - start}[sec]')

    return JsonResponse(data)

# http://127.0.0.1:8000/viewer/analyzer/get
@authenticate()
def get(request):
    unit = request.GET.get(key="unit", default="ym")
    from_value = request.GET.get(key="from", default="2016/04")
    to_value = request.GET.get(key="to", default="2019/12")
    root_path = os.getcwd()
    start = time.time()

    data = {
        "message": "Success",
        "hepco": HepcoController.get(root_path, unit, from_value, to_value),
        "tohokuepco": TohokuEpcoController.get(root_path, unit, from_value, to_value),
        "rikuden": RikudenController.get(root_path, unit, from_value, to_value),
        "tepco": TepcoController.get(root_path, unit, from_value, to_value),
        "chuden": ChudenController.get(root_path, unit, from_value, to_value),
        "kepco": KepcoController.get(root_path, unit, from_value, to_value),
        "energia": EnergiaController.get(root_path, unit, from_value, to_value),
        "yonden": YondenController.get(root_path, unit, from_value, to_value),
        "kyuden": KyudenController.get(root_path, unit, from_value, to_value),
        "okiden": OkidenController.get(root_path, unit, from_value, to_value)
    }
    print(f'elapsed_time:{time.time() - start}[sec]')

    return JsonResponse(data)

# http://52.196.187.98:8000/viewer/analyzer/check_download_page
# http://127.0.0.1:8000/viewer/analyzer/check_download_page
@authenticate()
def check_download_page(request):
    root_path = os.getcwd()
    start = time.time()

    data = {
        "01. hepco_result": HepcoController.check_download_page(root_path),
        "02. tohokuepco_result": TohokuEpcoController.check_download_page(root_path),
        "03. rikuden_result": RikudenController.check_download_page(root_path),
        "04. tepco_result": TepcoController.check_download_page(root_path),
        "05. chuden_result": ChudenController.check_download_page(root_path),
        "06. kepco_result": KepcoController.check_download_page(root_path),
        "07. energia_result": EnergiaController.check_download_page(root_path),
        "08. yonden_result": YondenController.check_download_page(root_path),
        "09. kyuden_result": KyudenController.check_download_page(root_path),
        "10. okiden_result": OkidenController.check_download_page(root_path),
    }
    print(f'elapsed_time:{time.time() - start}[sec]')

    return JsonResponse(data)
