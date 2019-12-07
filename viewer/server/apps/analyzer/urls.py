from django.urls import path

from viewer.server.apps.analyzer import api

urlpatterns = [
    path('analyzer/correct_data', api.correct_data, name='correct_data'),
    path('analyzer/count', api.count, name='count'),
    path('analyzer/get', api.get, name='get'),
    path('analyzer/check_download_page', api.check_download_page, name='check_download_page'),
]