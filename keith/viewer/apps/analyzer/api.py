from django.http import JsonResponse
import os
import time
import pandas

# http://127.0.0.1:8000/keith/analyzer/kick
from keith.viewer.apps.analyzer.company.kyudenservice import KyudenService
from keith.viewer.apps.analyzer.company.hepcoservice import HepcoService
from keith.viewer.apps.analyzer.company.kepcoservice import KepcoService
from keith.viewer.apps.analyzer.company.tepcoservice import TepcoService


def kick(request):

    # TODO:とりあえず動かすやつなのであとで消す。
    # TODO:場合によっては、redisの使用も考えてみる。


    reflesh = False
    root_path = os.getcwd()

    start = time.time()

    merged_feather_paths = []

    # 北海道電力
    hepco_json = __get_param_json(root_path, 'hepco')
    merged_feather_path = HepcoService.execute(hepco_json['url'], root_path, reflesh)
    merged_feather_paths.append(merged_feather_path)

    # 東京電力
    tepco_json = __get_param_json(root_path, 'tepco')
    merged_feather_path = TepcoService.execute(tepco_json['url'], root_path, reflesh)
    merged_feather_paths.append(merged_feather_path)

    # 関西電力
    kepco_json = __get_param_json(root_path, 'kepco')
    merged_feather_path = KepcoService.execute(kepco_json['url'], root_path, reflesh)
    merged_feather_paths.append(merged_feather_path)

    # 九州電力
    kyuden_json = __get_param_json(root_path, 'kyuden')
    merged_feather_path = KyudenService.execute(kyuden_json['url'], root_path, reflesh)
    merged_feather_paths.append(merged_feather_path)

    elapsed_time = time.time() - start

    print(f'elapsed_time:{elapsed_time}[sec]')

    hepco_count = HepcoService.count(root_path)
    tepco_count = TepcoService.count(root_path)
    kepco_count = KepcoService.count(root_path)
    kyuden_count = KyudenService.count(root_path)

    data = {
        "message": "Success",
        "hepco_count": hepco_count,
        "tepco_count": tepco_count,
        "kepco_count": kepco_count,
        "kyuden_count": kyuden_count,
    }

    return JsonResponse(data)


def __get_param_json(root_path, company):
    return pandas.read_json(open(f'{root_path}/apps/analyzer/param/{company}.json', 'r'))
