import json
from pymongo import MongoClient
from django.http import JsonResponse
from admin.settings import MONGODB_URL
from Spotability.serializers import UserSerializer
from bson.json_util import dumps


class MongoConnection(object):

    def __init__(self):
        client = MongoClient(MONGODB_URL)
        self.db = client['spotability']

    def get_collection(self, name):
        self.collection = self.db[name]
        
class SpotabilityCollection(MongoConnection):

    def __init__(self):
        super(SpotabilityCollection, self).__init__()
        self.get_collection('User')

    def update_and_save(self, obj):
        if self.collection.find_one({'email': obj['email']}) is not None and len(list(self.collection.find_one({'email': obj['email']}))):
            self.collection.update_one({ "email":obj['email']},{"$set":obj})
        else:
            self.collection.insert_one(obj)

    def test(self):
        self.collection.insert_one({'email':123,'name':'test'})
        
    def remove(self, obj):
        if self.collection.find({'email': obj.email}).count():
            self.collection.delete_one({ "email": obj.email})
            
    def search_by_email(self,email):
        cursor = self.collection.find_one({'email':email})
        if cursor is None or len(list(cursor)) == 0:
            return None
        else:
            return cursor

# A database object that connect to the genre collection
class GenreCollection(MongoConnection):
    
    def __init__(self):
        super(GenreCollection, self).__init__()
        self.get_collection('Genre')

    def update_and_save(self, genre, email):
        if self.collection.find_one({'genre': genre}) is not None and len(list(self.collection.find_one({'genre': genre}))):
            cursor = self.collection.find_one({'genre': genre})
            old_genre_obj = json.loads(dumps(cursor))
            genre_obj={'genre':genre, 'email':old_genre_obj['email']}
            genre_obj['email'].append(email)
            self.collection.update_one({'genre':genre},{"$set":genre_obj}) 
        else:
            self.collection.insert_one({'genre':genre,'email':[email]})
            
    def test(self):
        self.collection.insert_one({'email':123,'name':'test'})
        
    def remove(self, obj):
        if self.collection.find({'email': obj.email}).count():
            self.collection.delete_one({ "email": obj.email})
            
    def get_all_matches_in_genre(genre):
        pass

            
# User Collection Views
def test(request):
    obj = SpotabilityCollection()
    obj.test()
    return JsonResponse({'msg':"Added successfully"})

def add_new_user(user_map):
    obj = SpotabilityCollection()
    obj.update_and_save(user_map)  
    
    email = user_map['email']
    genre = user_map['top_genres'][0:5]
    obj = GenreCollection()
    for g in genre:
        obj.update_and_save(g, email)
    return JsonResponse({'msg':"Added successfully"})

def search_by_email(request):
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    if user is not None:
        return JsonResponse(json.loads(dumps(user)),safe=False)
    else:
        return JsonResponse({"msg":"No such user."})


# Genre Collection Views
def update_genre(genre, email):
    genre_obj = GenreCollection()
    
    if(genre_obj.collection.find_one({'genre': genre}) is not None and len(list(genre_obj.collection.find_one({'genre': genre})))):
        genre_map = {
            "genre": genre,
            "email": [email],
        }
        genre_obj.update_and_save(genre_map)
        
    else:
        cursor = genre_obj.collection.find_one({'genre': genre})
        info = json.loads(dumps(cursor))
        email_arr = info['email']
        
        if(email not in email_arr):
            email_arr.appends(email)
        genre_map = {
            "genre": genre,
            "email": email_arr,
        }
        genre_obj.update_and_save(genre_map)
        
    print("update " + genre)
    
    