from django.urls import path

from viewer.apps.analyzer import api

urlpatterns = [
    path('analyzer/correct_data', api.correct_data, name='correct_data'),
    path('analyzer/get', api.get, name='get'),
    path('analyzer/get_daily_data', api.get_daily_data, name='get_daily_data'),
    path('analyzer/check_download_page', api.check_download_page, name='check_download_page'),
]