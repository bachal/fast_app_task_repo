from django.shortcuts import render,redirect,HttpResponseRedirect
from rest_framework.response import Response
from demo_app.models import *
from demo_app.serializers import *
from rest_framework import status,viewsets
from django.contrib.auth import get_user_model
from django.contrib.auth import login, logout,authenticate
from demo_app.task import *
from django.core.mail import send_mail

# This viewset for Admin user for add user purpose
class UserViewSet(viewsets.ViewSet):
    def list(self,request):
        all_users=User_data.objects.all()
        serializer=UsersignupSerializer(all_users,many=True)
        return Response(serializer.data)
    
    def create(self, request):
        serializer=UsersignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            all_users=User_data.objects.all()
            serializer=UsersignupSerializer(all_users,many=True)
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

# This viewset for login purpose
class UserLoginViewSet(viewsets.ViewSet):
    def create(self,request):
        url_data=""
        get_data=request.data
        if get_data is not None:
            UserModel = get_user_model()
            if UserModel.objects.filter(email=get_data['username']).exists():
                user = UserModel.objects.get(email=get_data['username'])
                if user.is_superuser:
                    url_data="admin_login"
                else:
                    serializer=UserSerializer(user)
                    received_user=User_data.objects.get(user=user)
                    
                    if received_user.role=="Serivice_provider":
                        url_data="service_provider_login"
                    if received_user.role=="Client":
                        url_data="client_login"
                login(request, user)
                request.session['email'] = user.email
                
                return Response({'msg':'User present',"target_url":url_data,"status":"HTTP_201_CREATED"},status=status.HTTP_201_CREATED,)
            return Response({'msg':'User not present'},status=status.HTTP_400_BAD_REQUEST)

# This viewset for service provider for get own services nd add service purpose
class ServiceProviderViewset(viewsets.ViewSet):
    def list(self,request):
        if "email" in request.session.keys():
            user=User.objects.get(email=request.session['email'])
            service_provider=All_Serivices.objects.filter(user=user)
            serializer=All_SerivicesSerializer(service_provider,many=True)
            return Response(serializer.data)
        else:
            return Response("log in first")

    def create(self,request):
        if "email" in request.session.keys():
            service=request.data['service']
            new_service=All_Serivices.objects.create(user=User.objects.get(email=request.session['email']),service=service)
            new_service.save()
            serializer=All_SerivicesSerializer(new_service)
            user=User.objects.get(email=request.session['email'])
            service_provider=All_Serivices.objects.filter(user=user)
            serializers=All_SerivicesSerializer(service_provider,many=True)
            return Response(serializers.data)
        else:
            return Response("log in first")

# This viewset for client for get all services and contact to  service_provider purpose
class ClientViewset(viewsets.ViewSet):
    def list(self,request):
        all_service_provider=All_Serivices.objects.all()
        serializers=All_SerivicesSerializer(all_service_provider,many=True)
        return Response(serializers.data)

    def retrieve(self,request,pk=None):
        if "email" in request.session.keys():
            task_given=get_service_provider_email(pk,request.session['email'])
            #send_mail_with_celery(request.session['email'])
            return Response(task_given.data)
        else:
            return Response("log in first")
        


# this all vieset are render purpose
class UserLoginsPage(viewsets.ViewSet):
    def list(self,request):
        return render(request,"login.html")


class ClientPage(viewsets.ViewSet):
    def list(self, request):
       return render(request,"client.html")

class ServiceproviderPage(viewsets.ViewSet):
    def list(self, request):
        return render(request,"add_service.html")
        
class AdminPage(viewsets.ViewSet):
    def list(self, request):
        return render(request,"all_users_admin.html")
       

# this for user logout purpose    
class User_Logout(viewsets.ViewSet):
    
    def create(self,request):
        
        try:
            del request.session['email']
        except KeyError:
            pass
        return Response("You're logged out.")
