from django.urls import path

from keith.viewer.apps.analyzer import views

urlpatterns = [
    path('analyzer/kick', views.kick, name='kick'),
]