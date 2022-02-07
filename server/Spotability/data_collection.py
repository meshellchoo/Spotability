from os import access
from django.shortcuts import  redirect
from django.http import JsonResponse
import requests
import json 

def get_top_genres(auth_token):
    URL = 'https://api.spotify.com/v1/me/top/artists'
    params = {"limit":50,}
    token = "Bearer " + auth_token
    headers={'Authorization': token}
    response = requests.get(URL,headers=headers,params=params)
    data = response.json()
    genres_count = {}
    for item in data["items"]:
        for genre in item["genres"]:            
            if genre in genres_count:
                genres_count[genre] += 1
            else:
                genres_count[genre] = 1
    return sorted(genres_count, key=genres_count.get, reverse=True)

def get_user_info(auth_token):
    URL = '	https://api.spotify.com/v1/me'
    token = "Bearer " + auth_token
    headers={'Authorization': token}
    response = requests.get(URL,headers=headers)
    data = response.json()
    return data

