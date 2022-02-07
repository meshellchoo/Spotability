from django.urls import path
from .analytics import get_top_genre,get_top_track,get_recommended_tracks, get_top_artist
from .matchmaking import get_a_match, like_match, reject_match, get_your_mutuals
from .views import get, spotify_callback

from .database import search_by_email, test, add_dummy_data


appname = 'Spotability'
urlpatterns = [
    path('spotify-url/', get),
    path('redirect/', spotify_callback),
    path('search-by-email/', search_by_email),
    # Matchmaking
    path('get_a_match/',get_a_match),
    path('like_match/',like_match),
    path('reject_match/',reject_match),
    path('get_your_mutuals/',get_your_mutuals),
    # Learn more about your self
    path('get_top_genre',get_top_genre),
    path('get_top_track_from_top_genre',get_top_track),
    path('get_recommended_track',get_recommended_tracks),
    # path('is-authenticated/', isAuthenticated.as_view()),
    path('test/', test),

    # path('top_track', get_top_track_from_top_genre),
    path('get_top_artist', get_top_artist),
    path('add_dummy', add_dummy_data),

]