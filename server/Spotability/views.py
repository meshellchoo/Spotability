from os import access
from django.shortcuts import  redirect
from django.http import JsonResponse
from admin.settings import REDIRECT_URI, CLIENT_SECRET, CLIENT_ID
from requests import Request, post
from rest_framework import status
from rest_framework.response import Response
from Spotability.data_collection import get_top_genres, get_user_info
from Spotability.database import add_new_user
from django.shortcuts import redirect

from Spotability.analytics import get_top_artist_from_user, get_top_track_from_top_genre, get_recommended_track

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


def spotify_callback(request, format=None):
    code = request.GET.get('code')
    error = request.GET.get('error')
    response = post('https://accounts.spotify.com/api/token',data={
        'grant_type' : 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
    }).json()
    
    access_token = response.get('access_token')
    token_type = response.get('token_type')
    refresh_token = response.get('refresh_token')
    expires_in = response.get('expires_in')
    error = response.get('error')
    
    data = get_user_info(access_token)
    top_genres = get_top_genres(access_token)
    user_map ={
            "email": data["email"] ,
            "display_name" : data["display_name"],
            "country": data["country"],
            "gender": "",
            "img_url": data["images"][0]["url"],
            "access_token":access_token,
            "refresh_token":refresh_token,
            "expires_in":expires_in,
            "token_type":token_type,
            "top_genres":top_genres,
            "people_who_swiped_you": {},
            "people_who_you_swiped":{},
            "mutual_swipes": {} ,
            "previously_seen": {data["email"]:data["email"]},
            "top_artist" :get_top_artist_from_user(access_token),
            "top_track_from_top_genre" :get_top_track_from_top_genre(access_token),
            "recommended_tracks" : get_recommended_track(access_token)
    }
    

    
    # save data to database here
    add_new_user(user_map)

    
    # if not response:
    #     return JsonResponse({'error': 'Spotify request failed!'}, status=response.status_code)
    # return JsonResponse(response, status=status.HTTP_200_OK)
    return redirect("http://localhost:3000/spotability/redirect/"+data["email"])



# class isAuthenticated(APIView):
#     def get(self,request,format=None):
#         is_authenticated = is_spotify_authenticated(self.request.session.session_key)
#         return Response({'status':is_authenticated}, status=status.HTTP_200_OK)
        
