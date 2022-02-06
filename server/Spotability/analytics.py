from os import access
from django.shortcuts import  redirect
from django.http import JsonResponse
import requests
import json
import random
from bson.json_util import dumps
from Spotability.database import SpotabilityCollection
    
def get_top_genre(request):
    """
    query params: 'email' 
    """
    email = request.GET.get('email')
    print(email)
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    return JsonResponse({"top_genre":user['top_genres'][0]})

def get_top_track_from_top_genre(request):
    pass

# ex: https://api.spotify.com/v1/recommendations?seed_genres=classical,country 
def get_recommended_track(request):
    """
    query params: 'email' 
    """
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    least_five_genres= user["top_genres"][-6:-1]
    print(least_five_genres)
    URL = '	https://api.spotify.com/v1/recommendations'
    token = "Bearer " + user['access_token']
    headers={'Authorization': token}
    params={'seed_genres':least_five_genres}
    response = requests.get(URL,headers=headers,params=params)
    data = response.json()
    return data
