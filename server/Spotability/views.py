from django.shortcuts import render
from admin.settings import REDIRECT_URI, CLIENT_SECRET, CLIENT_ID
from rest_framework.views import APIView
from requests import Request, post
from rest_framework import status
from rest_framework.response import Response
class AuthURL(APIView):
    def get(self,request,format=None):
        # what information we want to access 
        scopes = 'user-read-private user-read-email'
        
        url = Request('GET','https://accounts.spotify.com/authorize',parama={
            'scope': scopes,
            'response_type': 'code',
            'redirect_uri': REDIRECT_URI,
            'client_id' : CLIENT_ID,
            
        }).prepare.url
        
        return Response({'url':url}, status=status.HTTP_200_OK)
    
    def spotify_callback(request, format=None):
        code = request.GET.get('code')
        error = request.GET.get('error')
        
        response = post('https://accounts.spotify.com/api/token',data={
            'grant_type' : 'authorization_code',
            'code': 'code',
            'redirect_uri': REDIRECT_URI,
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
        }).json
        
        access_token = response.get('access_token')
        token_type = response.get('token_type')
        refresh_token = response.get('refresh_token')
        expires_in = response.get('expires_in')
        error = response.get('error')
        