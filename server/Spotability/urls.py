from django.urls import path
from .views import get, spotify_callback
from .database import test 

appname = 'Spotability'
urlpatterns = [
    path('spotify-url/', get),
    path('redirect/', spotify_callback),
    # path('is-authenticated/', isAuthenticated.as_view()),
    path('test/', test),
]