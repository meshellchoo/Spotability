from rest_framework import serializers
from Spotability.models import User 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['_id', 'first_name', 'last_name', 'country', 'gender', 'bio','session', 'created_at', 'refresh_token', 'access_token','expires_in','token_type']
