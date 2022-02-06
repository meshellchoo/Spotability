from os import access
from django.shortcuts import  redirect
from django.http import JsonResponse
import requests
import json 

def get_top_genres(auth_token):
    BASE_URL = 'https://api.spotify.com/v1/me/top/artists'
    params = {"limit":50,}
    token = "Bearer " + auth_token
    headers={'Authorization': token}
    response = requests.get(BASE_URL,headers=headers,params=params)
    data = response.json()
    genres_count = {}
    for item in data["items"]:
        for genre in item["genres"]:            
            if genre in genres_count:
                genres_count[genre] += 1
            else:
                genres_count[genre] = 1
        
    return JsonResponse(data)
    