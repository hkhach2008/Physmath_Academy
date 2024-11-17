from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile

class SubjectSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=200)
    description = serializers.CharField()
    img = serializers.ImageField()
    subjectstatus = serializers.BooleanField()
    link = serializers.CharField(max_length=100)


class UserSerializer(serializers.ModelSerializer):
    school = serializers.CharField(max_length=100, required=False)
    region = serializers.CharField(max_length=100, required=False)

    class Meta:
        model = User
        fields = ["id", "username", "password", "email", "school", "region"]
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()

        user_profile = UserProfile.objects.create(
            user=user,
            school=validated_data.get('school', ''),
            region=validated_data.get('region', '')
        )

        return user