
from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, serializers, status
from .serializers import ProjectSerializer,CreateProjectSerializer
from .models import project
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

# list API view = queryset에 지정한 데이터 출력
# create API view = new model create;
class projectView(generics.ListAPIView):
    queryset=project.objects.all()
    serializer_class = ProjectSerializer

class CreateView(APIView):
    serializer_class = CreateProjectSerializer

    def post(self,request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            #user가 activate session을 가지고있는지 체크
            self.request.session.create()
            #없다면 session create
        serializer=self.serializer_class(data=request.data)
        #if the data is unique=True and really same, it causes error
        if serializer.is_valid():
            #fields =('name','team','keyword','details')
            name=serializer.data.get('name')
            team=serializer.data.get('team')
            keyword=serializer.data.get('keyword')
            details=serializer.data.get('details')
            queryset = project.objects.filter(name=name)
            if queryset.exists():
                room = queryset[0]
                room.team=team
                room.save(update_fields=['team'])
                return Response(ProjectSerializer(room).data, status=status.HTTP_200_OK)
            else:
                NewProject=project(name=name,team=team,keyword=keyword,details=details)
                NewProject.save()
                return Response(ProjectSerializer(NewProject).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
