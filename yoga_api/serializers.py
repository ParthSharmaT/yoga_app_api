from rest_framework import serializers

from .models import RegisterUserModel, PaymentModel


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterUserModel
        fields = ["name", "email", "age", "gender"]

    def create(self, validated_data):
        if RegisterUserModel.objects.filter(email=validated_data.get("email")).exists():
            raise serializers.ValidationError("User already exists")
        age = int(validated_data.get("age"))

        if age < 18 and age > 65:
            raise serializers.ValidationError("Age must be between 18 and 60")
        return RegisterUserModel.objects.create(**validated_data)


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentModel
        fields = ["user", "slot", "month", "year"]

    def create(self, validated_data):
        email = validated_data.get("user").email
        if (
            PaymentModel.objects.filter(user=RegisterUserModel.objects.get(email=email))
            and PaymentModel.objects.filter(month=validated_data.get("month")).exists()
            and PaymentModel.objects.filter(year=validated_data.get("year")).exists()
        ):
            raise serializers.ValidationError("User already paid")
        return PaymentModel.objects.create(**validated_data)
