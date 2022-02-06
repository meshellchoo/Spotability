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
        if self.collection.find({'id': obj.id}).count():
            self.collection.update({ "id": obj.id},{'id':123,'name':'test'})
        else:
            self.collection.insert_one({'id':123,'name':'test'})

    def test(self):
        self.collection.insert_one({'id':123,'name':'test'})
        
    def remove(self, obj):
        if self.collection.find({'id': obj.id}).count():
            self.collection.delete_one({ "id": obj.id})
        
            
def test(request):
    obj = SpotabilityCollection()
    obj.test()
    return JsonResponse({'msg':"Added successfully"})