import requests
import urllib


class RequestFunction(object):

    @classmethod
    def get_decoded_data(cls, url):
        # TODO:Kyudenは、毎月微妙にURL変わるからどうにかしたい。
        response = urllib.request.urlopen(url)
        if response.getcode() == 200:
            response.close()
            content = requests.get(url).content
            return content.decode('sjis')
        else:
            response.close()
            raise Exception(f'{url} is not found.')
