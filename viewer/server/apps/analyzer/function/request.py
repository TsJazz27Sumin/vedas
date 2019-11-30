import requests


class RequestFunction(object):

    @classmethod
    def get_decoded_data(cls, url):
        content = requests.get(url).content
        return content.decode('sjis')
