from rest_framework import serializers
from Spotability.models import User 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['_id', 'display_name', 'email','country', 'gender', 'img_url', 'refresh_token', 'access_token','expires_in','token_type']
