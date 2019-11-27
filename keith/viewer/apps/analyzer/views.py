from django.http import JsonResponse
import os

# http://127.0.0.1:8000/keith/analyzer/kick
from keith.viewer.apps.analyzer.company.common import CorrectFunction
from keith.viewer.apps.analyzer.company.kyuden import KyudenService


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
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2018_1q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/xls/sup_dem_results_2018_2q.xls',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2018_3q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2018_4q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2017_1q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2017_2q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2017_3q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2017_4q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2016_1q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2016_2q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2016_3q.csv',
        'https://www.hepco.co.jp/energy/recyclable_energy/fixedprice_purchase/csv/sup_dem_results_2016_4q.csv',
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

    # 九州電力
    kyuden_urls = [
        'http://www.kyuden.co.jp/var/rev0/0227/9764/area_jyukyu_jisseki_H28_1Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9765/area_jyukyu_jisseki_H28_2Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9766/area_jyukyu_jisseki_H28_3Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9767/area_jyukyu_jisseki_H28_4Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9768/area_jyukyu_jisseki_H29_1Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9769/area_jyukyu_jisseki_H29_2Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9770/area_jyukyu_jisseki_H29_3Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9771/area_jyukyu_jisseki_H29_4Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9772/area_jyukyu_jisseki_H30_1Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9773/area_jyukyu_jisseki_H30_2Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9774/area_jyukyu_jisseki_H30_3Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9775/area_jyukyu_jisseki_H30_4Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9776/area_jyukyu_jisseki_2019_1Q.csv',
        'http://www.kyuden.co.jp/var/rev0/0227/9777/area_jyukyu_jisseki_2019_2Q.csv',
    ]

    merged_feather_path = KyudenService.execute(kyuden_urls, root_path, reflesh)
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
