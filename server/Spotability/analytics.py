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
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    
    URL = 'https://api.spotify.com/v1/me/top/tracks'
    params = {"limit":1,}
    token = "Bearer " + user['access_token']
    headers={'Authorization': token}
    response = requests.get(URL,headers=headers,params=params)
    data = response.json()
    
    artist = data['items'][0]['artists'][0]['name']
    name = data['items'][0]['name']
    images = data['items'][0]['album']['images'][0]['url']
    
    output = {"name":name, "artist": artist, "images":images}

    return JsonResponse(output)

# ex: https://api.spotify.com/v1/recommendations?seed_genres=classical,country 
def get_recommended_track(request):
    """
    query params: 'email' 
    """
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    # least_genre = user["top_genres"][3]
    URL = '	https://api.spotify.com/v1/recommendations'
    token = "Bearer " + user['access_token']
    headers={'Authorization': token}
    random_genres = requests.get('https://api.spotify.com/v1/recommendations/available-genre-seeds',headers=headers).json()['genres']
    random_genre = random_genres[random.randint(0,len(random_genres)-1)]
    params={'seed_genres':random_genre}
    response = requests.get(URL,headers=headers,params=params)
    data = response.json()
    track = data['tracks'][0]
    track_info = {
        "title" : track['name'],
        "img_url" : track['album']['images'][-1]["url"],
        "artist" : track['artists'][0]['name']
    }
    return JsonResponse(track_info)
