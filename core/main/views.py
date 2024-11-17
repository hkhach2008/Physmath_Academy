from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from .models import *
from .serializers import *
from django.contrib.auth import authenticate



class SubjectAPIView(APIView):
    def get(self, request):
        subject = Subject.objects.all()
        return Response(SubjectSerializer(subject, many=True).data)


# @api_view(['POST'])
# def sign_up(request):
#     serializer = UserSerializer(data=request.data)
    
#     if serializer.is_valid():
#         user = serializer.save()
#         token = Token.objects.create(user=user)
#         # return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
#         return Response("user created")
        
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def sign_up(request):
    serializer = UserSerializer(data=request.data)
    
    if serializer.is_valid():
        user = serializer.save()
        token = Token.objects.create(user=user)
        # return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
        return Response("user created")
        
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def sign_in(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, username=email, password=password)
    
    if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        }, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
