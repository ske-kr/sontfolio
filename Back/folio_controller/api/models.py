from django.db import models
from django.db.models.fields import CharField
import string
import random

def generate_unique_code():
    length=6
    while True:
        code="".join(random.choices(string.ascii_uppercase,k=length))
        if project.objects.filter(code=code).count()==0:
            break
    
    return code

# Create your models here.
class project(models.Model):
    code=models.CharField(max_length=8,default="",unique=True)
    name = models.CharField(max_length=20,default="",unique=True,null=False)
    # unique = automatically check uniqueness of name
    team = models.CharField(max_length=20,default="alone")
    keyword = models.CharField(max_length=20,default="",null=False)
    details=models.CharField(max_length=100,default="None",null=False)
    posted=models.DateTimeField(auto_now_add=True)