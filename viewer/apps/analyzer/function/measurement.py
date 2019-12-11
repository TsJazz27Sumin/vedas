import time


class MeasurementFunction(object):

    @classmethod
    def rap(cls, start):
        print(f'elapsed_time:{time.time() - start}[sec]')