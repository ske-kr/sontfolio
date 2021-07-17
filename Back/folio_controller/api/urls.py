
from django.urls import path,include
from .views import projectView,CreateView,GetProject,JoinProject,UserInProject,delProject

urlpatterns = [
    path('', projectView.as_view()),
    path('create',CreateView.as_view()),
    path('get',GetProject.as_view()),
    path('join',JoinProject.as_view()),
    path('user-in-project',UserInProject.as_view()),
    path('del',delProject.as_view()),

]
