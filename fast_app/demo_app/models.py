from django.db import models
from django.contrib.auth.models import User

class User_data(models.Model): 
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    role=models.CharField(max_length=200)
    signup_date = models.DateTimeField('date published',null=True)
    

    USERNAME_FIELD = 'user'
    REQUIRED_FIELDS = []

class All_Serivices(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    service=models.CharField(max_length=200)
    
    USERNAME_FIELD = 'user'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.service

   