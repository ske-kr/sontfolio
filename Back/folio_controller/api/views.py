
from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, serializers, status
from .serializers import ProjectSerializer,CreateProjectSerializer
from .models import project
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# Create your views here.

# list API view = queryset에 지정한 데이터 출력
# create API view = new model create;
class projectView(generics.ListAPIView):
    queryset=project.objects.all()
    serializer_class = ProjectSerializer

class GetProject(APIView):
    serializer_class = ProjectSerializer
    lookup_url_param = 'code'

    def get(self,request,format=None):
        code = request.GET.get(self.lookup_url_param)
        if code != None:
            getproject=project.objects.filter(code=code)
            if len(getproject) >0:
                data=ProjectSerializer(getproject[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Project Not Found': 'Invalid project code.'},status=status.HTTP_404_NOT_FOUND)
        
        return Response({'Bad Request': 'Code parameter not found in request'}, status=status.HTTP_400_BAD_REQUEST)

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

class JoinProject(APIView):
    lookup_url_param = 'code'

    def post(self,request,format=None):
        ## session은 내가구현한것에선 활용하지 않음(로그인이 필요없는 시스템)
        if not self.request.session.exists(self.request.session.session_key):
            #user가 activate session을 가지고있는지 체크
            self.request.session.create()
        
        code = request.data.get('code')
        newName=request.data.get('name')
        if code != None:
            getProject= project.objects.filter(code=code)
            if len(getProject)>0:
                Project_result=getProject[0]
                Project_result.team=Project_result.team+", "+newName
                Project_result.save(update_fields=['team'])
                return Response({'message':'Project Joined'},status=status.HTTP_200_OK)
            return Response({"Bad request" : "Invalid Project Code"},status=status.HTTP_400_BAD_REQUEST)
        return Response({"Bad request" : "Invalid post data, did not find a code key"},status=status.HTTP_404_NOT_FOUND)


class UserInProject(APIView):
    def get(self,request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            #user가 activate session을 가지고있는지 체크
            self.request.session.create()
            #없다면 session create

        data={
            'code':self.request.session.get('code')
        }

        return JsonResponse(data, status=status.HTTP_200_OK)