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
    return JsonResponse(user['top_genres'][0])

def get_top_track_from_top_genre(request):
    pass

def get_recommended_track(request):
    pass
