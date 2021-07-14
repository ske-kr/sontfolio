
from django.shortcuts import render
from rest_framework import generics, serializers
from .serializers import ProjectSerializer
from .models import project
# Create your views here.

# list API view = queryset에 지정한 데이터 출력
# create API view = new model create;
class projectView(generics.ListAPIView):
    queryset=project.objects.all()
    serializer_class = ProjectSerializer
