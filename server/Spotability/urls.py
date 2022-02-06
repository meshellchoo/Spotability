from django.urls import path

from .matchmaking import get_a_match, like_match, reject_match
from .views import get, spotify_callback
from .database import search_by_email, test, add_new_genre_by_user

appname = 'Spotability'
urlpatterns = [
    path('spotify-url/', get),
    path('redirect/', spotify_callback),
    path('justintest/', add_new_genre_by_user),
    path('search-by-email/', search_by_email),
    path('get_a_match/',get_a_match),
    path('like_match/',like_match),
    path('reject_match/',reject_match),
    # path('is-authenticated/', isAuthenticated.as_view()),
    path('test/', test),
]