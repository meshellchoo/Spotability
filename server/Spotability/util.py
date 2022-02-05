from .models import SpotifyToken

def get_user_tokens(session_id):
    user_tokens = SpotifyToken.objects.filter(session=session_id)
    if user_tokens.exists():
        return user_tokens[0]
    else:
        return None 
    
def update_or_create_user_tokens(session_id, access_token, token_type, expires_in, refresh_token):
        pass 