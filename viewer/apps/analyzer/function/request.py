import requests
import urllib


class RequestFunction(object):

    @classmethod
    def get_decoded_data(cls, url):
        response = urllib.request.urlopen(url)
        if response.getcode() == 200:
            response.close()
            content = requests.get(url).content
            return content.decode('sjis')
        else:
            response.close()
            raise Exception(f'{url} is not found.')

    @classmethod
    def get_html(cls, download_page_url):
        url = download_page_url['url']
        codec = download_page_url['codec']
        response = urllib.request.urlopen(url)
        if response.getcode() == 200:
            response.close()
            content = requests.get(url).content
            return content.decode(codec)
        else:
            response.close()
            raise Exception(f'{url} is not found.')
