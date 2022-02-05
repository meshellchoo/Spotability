from django.urls import path
from .views import AuthURL
from .database import test 

appname = 'Spotability'
urlpatterns = [
    path('get-auth-url/', AuthURL.as_view()),
    path('redirect/', AuthURL.spotify_callback),
    # path('is-authenticated/', isAuthenticated.as_view()),
    path('test/', test),
]