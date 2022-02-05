from pymongo import MongoClient

class MongoConnection(object):

    def __init__(self):
        client = MongoClient(MONGODB_URL)
        db_handle = client.test
        self.db = client['database_name']

    def get_collection(self, name):
        self.collection = self.db[name]