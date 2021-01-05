from rest_framework import serializers
from demo_app.models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'first_name', 'last_name', 'email','password')
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
        

class UsersignupSerializer(serializers.ModelSerializer):
    
    user = UserSerializer(required=True)
    class Meta:
        model = User_data
        fields = ('id','user', 'role',)
    
    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        student, created = User_data.objects.update_or_create(user=user,role=validated_data.pop('role'))
        return student

class All_SerivicesSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = All_Serivices

        fields = ('user','service')
        #fields='__all__'




    





 
'''{"user":{
"email": "ramu1111@gmail.com",
"first_name": "ramu",
"last_name": "harde",
"password": "tyuiop",
"username": "rama"},
"contact": "4561237897", 
"role": "Manager"}'''



'''{"user":{"username":"somu",
         "first_name":"soma1",
         "last_name":"soma2",
         "email":"soma123@gmail.com",
         "password":"soma123123"
        },
          
          "role":"service_provider",
}'''
