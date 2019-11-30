class RequestFunction(object):

    @classmethod
    def get_decoded_data(cls, url):
        response = requests.get(url).content.decode('sjis')
        return response.decode('sjis')
