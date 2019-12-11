from django.http import Http404


def authenticate():
    def __decorator(function):
        def wrapper(*args, **kwargs):

            request = getattr(args[0], 'request', args[0])
            remote_addr = request.META['REMOTE_ADDR']

            # TODO:何もしない。

            return function(*args, **kwargs)

        return wrapper
    return __decorator