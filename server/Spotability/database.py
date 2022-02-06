import json
import random
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
            self.collection.update_one({"email": obj['email']}, {"$set": obj})
        else:
            self.collection.insert_one(obj)

    def test(self):
        self.collection.insert_one({'email': 123, 'name': 'test'})

    def remove(self, obj):
        if self.collection.find({'email': obj.email}).count():
            self.collection.delete_one({"email": obj.email})

    def search_by_email(self, email):
        cursor = self.collection.find_one({'email': email})
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
            genre_obj = {'genre': genre, 'email': old_genre_obj['email']}
            if email not in genre_obj['email']:
                genre_obj['email'].append(email)
            self.collection.update_one({'genre': genre}, {"$set": genre_obj})
        else:
            self.collection.insert_one({'genre': genre, 'email': [email]})

    def test(self):
        self.collection.insert_one({'email': 123, 'name': 'test'})

    def remove(self, obj):
        if self.collection.find({'email': obj.email}).count():
            self.collection.delete_one({"email": obj.email})

    def get_all_matches_in_genre(self, genre):
        return self.collection.find_one({'genre': genre})


# User Collection Views
def test(request):
    obj = SpotabilityCollection()
    obj.test()
    return JsonResponse({'msg': "Added successfully"})


def add_new_user(user_map):
    obj = SpotabilityCollection()
    obj.update_and_save(user_map)

    email = user_map['email']
    genre = user_map['top_genres'][0:5]
    obj = GenreCollection()
    for g in genre:
        obj.update_and_save(g, email)
    return JsonResponse({'msg': "Added successfully"})


def search_by_email(request):
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    if user is not None:
        return JsonResponse(json.loads(dumps(user)), safe=False)
    else:
        return JsonResponse({"msg": "No such user."})


def add_dummy_data(request):
    obj = SpotabilityCollection()

    name = request.GET.get('name')
    email = name + "@gmail.com"

    genre_list = ["pop",
                 "dance pop",
                 "rap",
                 "edm",
                 "hip hop",
                 "r&b",
                 "pop dance",
                 "tropical house",
                 "electropop",
                 "pop rap",
                 "canadian pop",
                 "alternative r&b",
                 "k-pop",
                 "uk pop",
                 "canadian contemporary r&b",
                 "electro house",
                 "alt z",
                 "chill r&b",
                 "asian american hip hop",
                 "korean r&b",
                 "j-pop",
                 "complextro",
                 "melodic rap",
                 "pop r&b",
                 "underground hip hop",
                 "chicago rap",
                 "la pop",
                 "k-indie",
                 "trap soul",
                 "k-pop boy group",
                 "canadian hip hop",
                 "toronto rap",
                 "k-rap",
                 "korean pop",
                 "bedroom soul",
                 "japanese teen pop",
                 "post-teen pop",
                 "progressive electro house",
                 "dfw rap",
                 "urban contemporary",
                 "k-pop girl group",
                 "indie r&b",
                 "etherpop",
                 "pittsburgh rap",
                 "art pop",
                 "melodic dubstep",
                 "trap",
                 "vapor trap",
                 "cali rap",
                 "portland hip hop",
                 "bc underground hip hop",
                 "sad rap",
                 "pop edm",
                 "anime",
                 "viral pop",
                 "bedroom pop",
                 "indie pop",
                 "german techno",
                 "indie poptimism",
                 "tennessee hip hop", "brooklyn drill",
                 "anime",
                 "anime rock",
                 "j-poprock",
                 "j-pop",
                 "j-pixie",
                 "otacore",
                 "japanese teen pop",
                 "mandopop",
                 "seiyu",
                 "japanese electropop",
                 "japanese power metal",
                 "vocaloid",
                 "anime score",
                 "j-pop girl group",
                 "denpa-kei",
                 "speedrun",
                 "video game music",
                 "singaporean mandopop",
                 "singaporean pop",
                 "malaysian mandopop",
                 "idol rock"]
    
    insert_genre = []
    
    i = 0
    while(i < 20):
        genre_add = random.choice(genre_list)
        if(genre_add not in insert_genre):
            insert_genre.append(genre_add)
            i += 1

    user_map = {
        "email": email,
        "display_name": name,
        "country": "US",
        "gender": "",
        "img_url": "https://i.scdn.co/image/ab6775700000ee8577c9e3086b14fac4c7296139",
        "access_token": "",
        "refresh_token": "",
        "expires_in": 3600,
        "token_type": "Bearer",
        "top_genres": insert_genre,
        "people_who_swiped_you": {},
        "people_who_you_swiped": {},
        "mutual_swipes": {},
        "previously_seen": {},
    }
    
    obj.update_and_save(user_map)
    
    genre_obj = GenreCollection()
    genre = insert_genre[:5]
    for g in genre:
        genre_obj.update_and_save(g, email)
    
    return JsonResponse({'msg': "Dummy Data Added " + name})
