from os import access
from django.shortcuts import  redirect
from django.http import JsonResponse
import requests
import json
import random
from bson.json_util import dumps
from Spotability.database import SpotabilityCollection
from admin.settings import SPOTIFY_BASE_URL

# requests
def get_top_genre(request):
    """
    query params: 'email' 
    """
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    return JsonResponse({"top_genre":user['top_genres'][0]})

def get_top_artist(request): 
    """
    query params: 'email' 
    """
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    return JsonResponse({"top_artist":user["top_artist"]})

def get_top_track(request):
    """
    query params: 'email' 
    """
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    return JsonResponse({"top_track_from_top_genre":user["top_track_from_top_genre"]})
def get_recommended_tracks(request):
    """
    query params: 'email' 
    """
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    return JsonResponse({"recommended_tracks":user["recommended_tracks"]})

# helper functions
def get_top_track_from_top_genre(access_token):
    obj = SpotabilityCollection()
    func = '/me/top/tracks'
    token = "Bearer " + access_token
    response = requests.get(SPOTIFY_BASE_URL+func,headers={'Authorization': token},params={"limit":1,})
    data = response.json()
    
    artist = data['items'][0]['artists'][0]['name']
    name = data['items'][0]['name']
    images = data['items'][0]['album']['images'][0]['url']
    
    return {"track_title":name, "artist": artist, "img_url":images}


def get_top_artist_from_user(access_token):
    func = '/me/top/artists'
    token = "Bearer " + access_token
    response = requests.get(SPOTIFY_BASE_URL+func,headers={'Authorization': token},params={"limit":1,})
    data = response.json()
    
    name = data['items'][0]['name']
    images = data['items'][0]['images'][0]['url']

    return {"artist":name, "img_url":images}

def get_recommended_track(access_token):
    obj = SpotabilityCollection()
    # least_genre = user["top_genres"][3]
    func = '/recommendations'
    token = "Bearer " + access_token
    random_genres = requests.get(SPOTIFY_BASE_URL+'/recommendations/available-genre-seeds',headers={'Authorization': token}).json()['genres']

    random_genre = random_genres[0]
    # random_genre = random_genres[random.randint(0,len(random_genres)-1)]

    params={'seed_genres':random_genre}
    response = requests.get(SPOTIFY_BASE_URL+func,headers={'Authorization': token},params=params)
    data = response.json()
    track = data['tracks'][0]
    track_info = {
        "track_title" : track['name'],
        "img_url" : track['album']['images'][-1]["url"],
        "artist" : track['artists'][0]['name']
    }
    return track_info
