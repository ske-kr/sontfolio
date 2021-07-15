from django.urls import path
from .views import index
urlpatterns = [
    path('',index),
    path('create', index),
    path('list',index),
    path('project/<str:projectCode>',index),
    path('join',index)
]