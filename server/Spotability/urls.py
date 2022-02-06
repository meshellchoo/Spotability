from django.urls import path
from .views import get
from .database import test 

appname = 'Spotability'
urlpatterns = [
    path('spotify-url/', get),
    # path('redirect/', AuthURL.spotify_callback),
    # path('is-authenticated/', isAuthenticated.as_view()),
    path('test/', test),
]