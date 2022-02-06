from django.urls import path
from .views import get, spotify_callback
from .database import search_by_email, test, add_new_genre_by_user

appname = 'Spotability'
urlpatterns = [
    path('spotify-url/', get),
    path('redirect/', spotify_callback),
    path('justintest/', add_new_genre_by_user),
    path('search-by-email/', search_by_email),
    # path('is-authenticated/', isAuthenticated.as_view()),
    path('test/', test),
]