import json
import traceback

import slackweb
from django.http import JsonResponse, Http404
import os
import time

from viewer.apps.analyzer.controller.chuden import ChudenController
from viewer.apps.analyzer.controller.energia import EnergiaController
from viewer.apps.analyzer.controller.hepco import HepcoController
from viewer.apps.analyzer.controller.japan import JapanController
from viewer.apps.analyzer.controller.kepco import KepcoController
from viewer.apps.analyzer.controller.kyuden import KyudenController
from viewer.apps.analyzer.controller.okiden import OkidenController
from viewer.apps.analyzer.controller.rikuden import RikudenController
from viewer.apps.analyzer.controller.tepco import TepcoController

from viewer.apps.analyzer.controller.tohokuepco import TohokuEpcoController
from viewer.apps.analyzer.controller.yonden import YondenController
from viewer.apps.analyzer.decorator.auth import authenticate

# http://vedas-api.com:8000/viewer/analyzer/correct_data
# http://127.0.0.1:8000/viewer/analyzer/correct_data

SLACK_URL_NOTIFY = 'https://hooks.slack.com/services/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'
SLACK_URL_CONTACT = 'https://hooks.slack.com/services/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'


@authenticate()
def correct_data(request, reflesh=True):
    # TODO:IPでアクセス制限するだけなので、どこかで認証を手厚くすることを検討。
    root_path = os.getcwd()
    start = time.time()

    hepco_count, hepco_merged_pkl_path = HepcoController.correct_data(root_path, reflesh)
    tohokuepco_count, tohokuepco_merged_pkl_path = TohokuEpcoController.correct_data(root_path, reflesh)
    rikuden_count, rikuden_merged_pkl_path = RikudenController.correct_data(root_path, reflesh)
    tepco_count, tepco_merged_pkl_path = TepcoController.correct_data(root_path, reflesh)
    chuden_count, chuden_merged_pkl_path = ChudenController.correct_data(root_path, reflesh)
    kepco_count, kepco_merged_pkl_path = KepcoController.correct_data(root_path, reflesh)
    energia_count, energia_merged_pkl_path = EnergiaController.correct_data(root_path, reflesh)
    yonden_count, yonden_merged_pkl_path = YondenController.correct_data(root_path, reflesh)
    kyuden_count, kyuden_merged_pkl_path = KyudenController.correct_data(root_path, reflesh)
    okiden_count, okiden_merged_pkl_path = OkidenController.correct_data(root_path, reflesh)

    path_list = [
        hepco_merged_pkl_path,
        tohokuepco_merged_pkl_path,
        rikuden_merged_pkl_path,
        tepco_merged_pkl_path,
        chuden_merged_pkl_path,
        kepco_merged_pkl_path,
        energia_merged_pkl_path,
        yonden_merged_pkl_path,
        kyuden_merged_pkl_path,
        okiden_merged_pkl_path
    ]

    japan_count = JapanController.correct_data(root_path, path_list) if None not in path_list else 0

    data = {
        "message": "Success",
        "01. hepco_count": hepco_count,
        "02. tohokuepco_count": tohokuepco_count,
        "03. rikuden_count": rikuden_count,
        "04. tepco_count": tepco_count,
        "05. chuden_count": chuden_count,
        "06. kepco_count": kepco_count,
        "07. energia_count": energia_count,
        "08. yonden_count": yonden_count,
        "09. kyuden_count": kyuden_count,
        "10. okiden_count": okiden_count,
        "11. japan_count": japan_count,
    }
    print(f'elapsed_time:{time.time() - start}[sec]')

    slack = slackweb.Slack(url=SLACK_URL_NOTIFY)
    json_data = json.dumps(data)
    slack.notify(text=json_data.replace('],', ']\n').replace('{', '').replace('}', ''))

    return JsonResponse(data)

# http://127.0.0.1:8000/viewer/analyzer/get
@authenticate()
def get(request):
    unit = request.GET.get(key="unit", default="ym")
    from_value = request.GET.get(key="from", default="2016/04")
    to_value = request.GET.get(key="to", default="2019/12")
    root_path = os.getcwd()
    start = time.time()

    try:
        if unit == "y" or unit == "ym" or unit == "ymd":
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
                "okiden": OkidenController.get(root_path, unit, from_value, to_value),
                "japan": JapanController.get(root_path, unit, from_value, to_value),
            }
            print(f'elapsed_time:{time.time() - start}[sec]')

            return JsonResponse(data)
    except Exception:
        slack = slackweb.Slack(url=SLACK_URL_NOTIFY)
        slack.notify(
            text=f"unit:{unit} from_value:{from_value} to_value:{to_value} message:{traceback.format_exc()}"
        )
        raise Http404()

# http://127.0.0.1:8000/viewer/analyzer/get_daily_data
@authenticate()
def get_daily_data(request):
    unit = request.GET.get(key="unit", default="ym")
    year_value = request.GET.get(key="year", default="2019")
    month_value = request.GET.get(key="month", default="11")
    date_value = request.GET.get(key="date", default="1")
    root_path = os.getcwd()
    start = time.time()

    try:
        if unit == "1H":
            data = {
                "message": "Success",
                "hepco": HepcoController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "tohokuepco": TohokuEpcoController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "rikuden": RikudenController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "tepco": TepcoController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "chuden": ChudenController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "kepco": KepcoController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "energia": EnergiaController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "yonden": YondenController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "kyuden": KyudenController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "okiden": OkidenController.get_daily_data(root_path, unit, year_value, month_value, date_value),
                "japan": JapanController.get_daily_data(root_path, unit, year_value, month_value, date_value),
            }
            print(f'elapsed_time:{time.time() - start}[sec]')

            return JsonResponse(data)
    except Exception:
        slack = slackweb.Slack(url=SLACK_URL_NOTIFY)
        slack.notify(
            text=f"unit:{unit} year_value:{year_value} month_value:{month_value} date_value:{date_value} message:{traceback.format_exc()}"
        )
        raise Http404()

# http://vedas-api.com:8000/viewer/analyzer/check_download_page
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

    slack = slackweb.Slack(url=SLACK_URL_NOTIFY)
    json_data = json.dumps(data)
    slack.notify(text=json_data.replace('],', ']\n').replace('{', '').replace('}', ''))

    return JsonResponse(data)


# http://127.0.0.1:8000/viewer/analyzer/health_check
def health_check(request):
    return JsonResponse({"message": "success"})


# TODO:Reactからのリクエストしか受けないことを確認する。
def contact(request):
    datas = json.loads(request.body)
    full_name = datas['full_name']
    email = datas['email']
    contact_information = datas['inquiry']
    slack = slackweb.Slack(url=SLACK_URL_CONTACT)

    text = f'full_name = {full_name} \nemail = {email} \ncontact_information = {contact_information}'
    slack.notify(text=text)

    return JsonResponse({"message": "success"})


# TODO:Reactからのリクエストしか受けないことを確認する。
def share(request):
    datas = json.loads(request.body)
    type = datas['type']
    url = datas['url']
    slack = slackweb.Slack(url=SLACK_URL_NOTIFY)

    text = f'share by {type} \nurl is  {url}'
    slack.notify(text=text)

    return JsonResponse({"message": "success"})
