from django.urls import path,include
from .views import projectView

urlpatterns = [
    path('', projectView.as_view())
]
