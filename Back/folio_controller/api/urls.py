
from django.urls import path,include
from .views import projectView,CreateView

urlpatterns = [
    path('', projectView.as_view()),
    path('create',CreateView.as_view())
]
