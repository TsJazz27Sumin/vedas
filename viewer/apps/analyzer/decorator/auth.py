from django.http import Http404


def localhost_only():
    def __decorator(function):
        def wrapper(*args, **kwargs):

            request = getattr(args[0], 'request', args[0])
            remote_addr = request.META['REMOTE_ADDR']

            if remote_addr == '127.0.0.1' or remote_addr == 'localhost':
                return function(*args, **kwargs)
            else:
                raise Http404('Not Found')

        return wrapper
    return __decorator