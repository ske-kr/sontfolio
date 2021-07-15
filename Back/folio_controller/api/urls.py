
from django.urls import path,include
from .views import projectView,CreateView,GetProject

urlpatterns = [
    path('', projectView.as_view()),
    path('create',CreateView.as_view()),
    path('get',GetProject.as_view()),
]
