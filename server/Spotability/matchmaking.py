from os import access
from django.shortcuts import  redirect
from django.http import JsonResponse
import requests
import json
import random
from bson.json_util import dumps
from Spotability.database import SpotabilityCollection, GenreCollection


def get_a_match(request):
    """
    query params: 'email' 
    """
    email = request.GET.get('email')
    user_obj = SpotabilityCollection()
    user = user_obj.search_by_email(email)
    
    match,genre = generate_random_match(user)
    
    # update prev seen
    user["previously_seen"][match] = match
    user_obj.update_and_save(user)
    
    user = user_obj.search_by_email(match)
    return JsonResponse({"match":(json.loads(dumps(user))),"overlapping_genre":genre})


def generate_random_match(user):
    counter = 0
    genre_obj = GenreCollection()
    potential_matches = genre_obj.get_all_matches_in_genre(user['top_genres'][0])
    rand = random.randint(0,len(potential_matches)-1)
    match = potential_matches['email'][1]
    while (match == user["email"] or match in user["previously_seen"]) and counter < len(potential_matches): 
        rand = random.randint(0,len(potential_matches)-1)
        match = potential_matches['email'][rand]
        counter += 1
    if len(potential_matches) == 0:
        return 'michaelchu@ymail.com',user['top_genres'][0]
    return match,user['top_genres'][0]

def like_match(request):
    """
    query params: 'email' ,'liked_match' 
    """
    email = request.GET.get('email')
    liked_match = request.GET.get('liked_match')
    
    user_obj = SpotabilityCollection()
    user = user_obj.search_by_email(email)
    user['people_who_you_swiped'][liked_match] = liked_match
    user_obj.update_and_save(user)
    
    user = user_obj.search_by_email(liked_match)
    user['people_who_swiped_you'][email] = email
    user_obj.update_and_save(user)
    return JsonResponse({"msg":"Successfully updated liked matches"})

def reject_match(request):
    """
    query params: 'email', 'rejected_match' 
    """
    email = request.GET.get('email')
    rejected_match = request.GET.get('rejected_match')
    print("email",email)
    user_obj = SpotabilityCollection()
    user = user_obj.search_by_email(rejected_match)

    user['previously_seen'][email] = email
    user_obj.update_and_save(user)
    return JsonResponse({"msg":"Successfully updated liked matches"})


