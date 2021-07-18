from rest_framework import serializers
from .models import project

#serialize our model data to ex)json
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=project
        fields=('id','code','name','team','keyword','details','posted')


class CreateProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=project
        fields =('name','team','keyword','details')

class UpdateProjectSerializer(serializers.ModelSerializer):
    #check uniqueness of code
    code=serializers.CharField(validators=[])

    class Meta:
        model=project
        fields =('name','team','keyword','details','code')