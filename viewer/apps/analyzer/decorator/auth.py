from django.http import Http404


def authenticate():
    def __decorator(function):
        def wrapper(*args, **kwargs):

            request = getattr(args[0], 'request', args[0])
            remote_addr = request.META['REMOTE_ADDR']

            # TODO: とりあえずローカル想定なので決め打ち。ゆくゆくは設定ファイルに逃したい。
            # 特定IPアドレスしかアクセスを許可しない。
            if '127.0.0.1' != remote_addr:
                raise Http404()

            return function(*args, **kwargs)

        return wrapper
    return __decorator