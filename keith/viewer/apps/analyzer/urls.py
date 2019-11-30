from django.urls import path

from keith.viewer.apps.analyzer import api

urlpatterns = [
    path('analyzer/correct_data', api.correct_data, name='correct_data'),
    path('analyzer/count', api.count, name='count'),
    path('analyzer/solar', api.solar, name='solar'),
]