from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import RegisterUserModel, PaymentModel
from .serializers import RegisterUserSerializer, PaymentSerializer

# Create your views here.


class RegisterUserView(APIView):
    def post(self, request):
        print(request.data)

        registeruserserializer = RegisterUserSerializer(data=request.data)

        if registeruserserializer.is_valid():
            registeruserserializer.save()
            return Response({"message": "User Registered Successfully"})
        return Response({"error": registeruserserializer.errors})


class CompletePayment(APIView):
    def post(self, request):
        try:

            paymentserializer = PaymentSerializer(data=request.data)
            if not RegisterUserModel.objects.filter(
                email=request.data.get("user")
            ).exists():
                return Response({"message": "User does not exist"})
            if paymentserializer.is_valid():
                paymentserializer.save()
                return Response({"message": "Payment Completed Successfully"})
            else:
                return Response({"message": paymentserializer.errors})

        except:
            return Response({"message": "You have already paid for this month"})
