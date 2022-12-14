from django.contrib import admin
from django.urls import path, include
from .views import RegisterUserView, CompletePayment

urlpatterns = [
    path("register/", RegisterUserView.as_view(), name="register"),
    path("payment/", CompletePayment.as_view(), name="payment"),
]
