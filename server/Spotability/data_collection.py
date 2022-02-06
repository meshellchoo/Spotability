from os import access
from django.shortcuts import  redirect
from django.http import JsonResponse
import requests

def get_top_genres(auth_token):
    print("auth_token",auth_token)
    token = "Bearer " + 'BQCk4VBnPJgTU5uDcA4JrrAQUpZ56plbzzwdtFqKgrwIvCp-KqjqUOvS-DGBsfztLcay505TuDqNIbPVXHwukT-mD7bW-CtFH123TzswcQYd0aG0vPmsNOW3O930RF80jXb9Bx21cj3BrRZhMnIaY8idEuS7zNUgu6Yv3so'
    response = requests.get('https://api.spotify.com/v1/me/top/artists?limit=50', headers={'Authorization': token}).json()
    print(response)
    # genres_count = {}
    return {}
    