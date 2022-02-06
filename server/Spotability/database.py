import json
from pymongo import MongoClient
from django.http import JsonResponse
from admin.settings import MONGODB_URL
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
        # if self.collection.find({'email': obj.email}).count():
        #     self.collection.update({ "email": obj.email},obj)
        # else:
        print("obj",obj)
        print("done")
        self.collection.insert_one(obj)

    def test(self):
        self.collection.insert_one({'email':123,'name':'test'})
        
    def remove(self, obj):
        if self.collection.find({'email': obj.email}).count():
            self.collection.delete_one({ "email": obj.email})
        
            
def test(request):
    obj = SpotabilityCollection()
    obj.test()
    return JsonResponse({'msg':"Added successfully"})

# def get_user_from_request(request):
#     user_map ={
#         "_id": request.GET.get('refresh')  ,
#         "first_name": request.GET.get('first_name'),
#         "last_name": request.GET.get('last_name'),
#         "country":request.GET.get('country'),
#         "gender":request.GET.get('gender'),
#         "bio":request.GET.get('bio'),
#         "created_at":request.GET.get('created_at'),
#         "refresh_token":request.GET.get('refresh_token'),
#         "expires_in":request.GET.get('expires_in'),
#         "token_type":request.GET.get('token_type'),
#     }
#     return user_map

def add_new_user(user_map):
    obj = SpotabilityCollection()
    obj.update_and_save(user_map)
    return JsonResponse({'msg':"Added successfully"})