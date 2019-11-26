from django.http import JsonResponse
import os

# http://127.0.0.1:8000/keith/analyzer/kick
from keith.viewer.apps.analyzer.company.common import CorrectFunction


def kick(request):
    # pip install pandas
    # pip install feather-format

    import os
    import time

    # TODO:とりあえず動かすやつなのであとで消す。
    # TODO:場合によっては、redisの使用も考えてみる。
    from keith.viewer.apps.analyzer.company.hepco import HepcoService
    from keith.viewer.apps.analyzer.company.kepco import KepcoService
    from keith.viewer.apps.analyzer.company.tepco import TepcoService

    reflesh = False
    root_path = os.getcwd()

    start = time.time()

    merged_feather_paths = []

    # 北海道電力
    hepco_urls = [
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2019_2q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2019_1q.csv',
    ]

    merged_feather_path = HepcoService.execute(hepco_urls, root_path, reflesh)
    merged_feather_paths.append(merged_feather_path)

    # 東京電力
    tepco_urls = [
        'http://www.tepco.co.jp/forecast/html/images/area-2016.csv',
        'http://www.tepco.co.jp/forecast/html/images/area-2017.csv',
        'http://www.tepco.co.jp/forecast/html/images/area-2018.csv',
        'http://www.tepco.co.jp/forecast/html/images/area-2019.csv',
    ]

    merged_feather_path = TepcoService.execute(tepco_urls, root_path, reflesh)
    merged_feather_paths.append(merged_feather_path)

    # 関西電力
    kepco_urls = [
        'https://www.kepco.co.jp/energy_supply/supply/denkiyoho/csv/area_jyukyu_jisseki_2016.csv',
        'https://www.kepco.co.jp/energy_supply/supply/denkiyoho/csv/area_jyukyu_jisseki_2017.csv',
        'https://www.kepco.co.jp/energy_supply/supply/denkiyoho/csv/area_jyukyu_jisseki_2018.csv',
        'https://www.kepco.co.jp/energy_supply/supply/denkiyoho/csv/area_jyukyu_jisseki_2019.csv',
    ]

    merged_feather_path = KepcoService.execute(kepco_urls, root_path, reflesh)
    merged_feather_paths.append(merged_feather_path)

    elapsed_time = time.time() - start

    print(f'elapsed_time:{elapsed_time}[sec]')

    hepco_count = HepcoService.count(root_path)
    tepco_count = TepcoService.count(root_path)
    kepco_count = KepcoService.count(root_path)

    data = {
        "message": "Success",
        "hepco_count": hepco_count,
        "tepco_count": tepco_count,
        "kepco_count": kepco_count
    }
    return JsonResponse(data)
