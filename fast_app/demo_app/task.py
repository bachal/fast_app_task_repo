from celery import shared_task
from django.core.mail import send_mail
from demo_app.serializers import *
from rest_framework import status,viewsets
from django.contrib.auth import get_user_model
from rest_framework.response import Response



@shared_task
def get_service_provider_email(pk,user_mail):
    id=pk
    given_user=User.objects.get(id=id)
    serializer=UserSerializer(given_user)
    print("service_provider_email=",given_user.email)
    print("client_sender_email=",user_mail)
    return serializer
    

@shared_task
def send_mail_with_celery(mails):
    print("email data")
    '''get_email result="send_mail(
            'MAIL FROM  DJANGO',
            'for checking purpose.',
            'sender_email',
            [mails],
            fail_silently=False,
        )"'''

