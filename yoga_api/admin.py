from django.contrib import admin
from .models import RegisterUserModel, PaymentModel

# Register your models here.
admin.site.register(RegisterUserModel)
admin.site.register(PaymentModel)
