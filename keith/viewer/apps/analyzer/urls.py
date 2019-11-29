from django.urls import path

from keith.viewer.apps.analyzer import api

urlpatterns = [
    path('analyzer/kick', api.kick, name='kick'),
]