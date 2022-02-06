from django.db import models

class User(models.Model):
    # User info
    email = models.CharField(max_length=50,unique=True) 
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    gender = models.CharField(max_length=50)
    bio = models.CharField(max_length=1000)
    # swipes
    # match_gender = models.CharField()
    # topGenres: arr of tuples (genre,weight)
	# peopleWhoSwipedYou: array 
    # mutualSwipes: array
    # previouslySeen: map 
    # token info
    created_at = models.DateTimeField(auto_now_add=True)
    refresh_token = models.CharField(max_length=150)
    access_token = models.CharField(max_length=150)
    expires_in = models.DateTimeField()
    token_type = models.CharField(max_length=50)
