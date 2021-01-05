from django.contrib import admin
from demo_app.models import *
from django.db import models


@admin.register(User_data)
class user_dataAdmin(admin.ModelAdmin ):
    list_display = ['user', 'role']

@admin.register(All_Serivices)
class All_SerivicesAdmin(admin.ModelAdmin ):
    list_display = ['user', 'service']

