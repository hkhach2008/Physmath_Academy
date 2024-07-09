from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path("sign_up/", views.sign_up),
    path("sign_in/", views.sign_in),
    path("api/v1/subjcets", SubjectAPIView.as_view())
]