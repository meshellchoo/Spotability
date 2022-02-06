from os import access
from django.shortcuts import  redirect
from django.http import JsonResponse
from admin.settings import REDIRECT_URI, CLIENT_SECRET, CLIENT_ID
from rest_framework.views import APIView
from requests import Request, post
from rest_framework import status
from rest_framework.response import Response
from .util import get_user_tokens, is_spotify_authenticated, update_or_create_user_tokens
# class AuthURL(APIView):
#     def get(self,request,format=None):
#         # check for scopes here -> https://developer.spotify.com/documentation/general/guides/authorization/scopes/
#         scopes = 'user-read-private user-read-email user-top-read'
#         url = Request('GET','https://accounts.spotify.com/authorize',params={
#             'scope': scopes,
#             'response_type': 'code',
#             'redirect_uri': REDIRECT_URI,
#             'client_id' : CLIENT_ID,
            
#         }).prepare.url
#         return Response({'url':url}, status=status.HTTP_200_OK)
        
def get(request):
    # check for scopes here -> https://developer.spotify.com/documentation/general/guides/authorization/scopes/
    scopes = 'user-read-private user-read-email user-top-read'
    url = Request('GET','https://accounts.spotify.com/authorize',params={
        'scope': scopes,
        'response_type': 'code',
        'redirect_uri': REDIRECT_URI,
        'client_id' : CLIENT_ID,
        
    }).prepare().url
    return JsonResponse({'url':url}, status=status.HTTP_200_OK)
    # def spotify_callback(request, format=None):
    #     code = request.GET.get('code')
    #     error = request.GET.get('error')
        
    #     response = post('https://accounts.spotify.com/api/token',data={
    #         'grant_type' : 'authorization_code',
    #         'code': 'code',
    #         'redirect_uri': REDIRECT_URI,
    #         'client_id': CLIENT_ID,
    #         'client_secret': CLIENT_SECRET,
    #     }).json()
        
    #     access_token = response.get('access_token')
    #     token_type = response.get('token_type')
    #     refresh_token = response.get('refresh_token')
    #     expires_in = response.get('expires_in')
    #     error = response.get('error')
        
    #     # if not request.session.exists(request.session.session_key):
    #     #     request.session.create()
            
            
    #     # update_or_create_user_tokens(
    #     #     request.session.session_key, access_token, token_type, expires_in, refresh_token)
    #     return redirect('Spotability:')


# class isAuthenticated(APIView):
#     def get(self,request,format=None):
#         is_authenticated = is_spotify_authenticated(self.request.session.session_key)
#         return Response({'status':is_authenticated}, status=status.HTTP_200_OK)
        
