from django.db import models

# Create your models here.
class RegisterUserModel(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(
        max_length=254, unique=True, db_index=True, primary_key=True
    )
    age = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)


class PaymentModel(models.Model):
    user = models.ForeignKey(RegisterUserModel, on_delete=models.CASCADE)
    slot = models.CharField(max_length=100)
    month = models.CharField(max_length=100)
    year = models.CharField(max_length=100)
