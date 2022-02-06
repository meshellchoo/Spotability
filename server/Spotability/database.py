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
            

def test(request):
    obj = SpotabilityCollection()
    obj.test()
    return JsonResponse({'msg':"Added successfully"})

def add_new_user(user_map):
    obj = SpotabilityCollection()
    obj.update_and_save(user_map)    
    return JsonResponse({'msg':"Added successfully"})

def search_by_email(request):
    email = request.GET.get('email')
    obj = SpotabilityCollection()
    user = obj.search_by_email(email)
    if user is not None:
        return JsonResponse(json.loads(dumps(user)),safe=False)
    else:
        return JsonResponse({"msg":"No such user."})
    
    