import requests
import urllib


class RequestFunction(object):

    @classmethod
    def get_decoded_data(cls, url):
        headers = {
            "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:47.0) Gecko/20100101 Firefox/47.0"
        }
        request = urllib.request.Request(url, headers=headers)
        response = urllib.request.urlopen(request)
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
        headers = {
            "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:47.0) Gecko/20100101 Firefox/47.0"
        }
        codec = download_page_url['codec']
        request = urllib.request.Request(url, headers=headers)
        response = urllib.request.urlopen(request)
        if response.getcode() == 200:
            response.close()
            content = requests.get(url).content
            return content.decode(codec)
        else:
            response.close()
            raise Exception(f'{url} is not found.')
