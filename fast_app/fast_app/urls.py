from django.contrib import admin
from django.urls import path,include
from demo_app import views
from rest_framework.routers import DefaultRouter


#Creating Router Object
router = DefaultRouter()
# register view with router
router.register('userapi',views.UserViewSet,basename='user')
router.register('login', views.UserLoginViewSet,basename='login_page')
router.register('', views.UserLoginsPage,basename='user_login')
router.register('admin_login', views.AdminPage,basename='admin_logins')
router.register('client_login', views.ClientPage,basename='client_login')
router.register('service_provider_login', views.ServiceproviderPage,basename='service_provider')
router.register('add_service', views.ServiceProviderViewset,basename='service_add')
router.register('client', views.ClientViewset,basename='client_viewset')
router.register('logout', views.User_Logout,basename='logout')









urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls))
]


