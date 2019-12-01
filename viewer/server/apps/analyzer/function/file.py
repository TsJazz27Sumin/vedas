import pathlib
import pickle

import redis
import pandas

from viewer.server.apps.analyzer.function.request import RequestFunction


class FileFunction(object):
    COMPANY_NAME_REPLACE_KEYWORD = '{COMPANY_NAME}'
    ORIGINAL_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/original'
    PROCESSED_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/processed'
    MERGED_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/merged'
    MERGED_CSV_FOLDER = f'apps/analyzer/data/{COMPANY_NAME_REPLACE_KEYWORD}/merged_csv'

    @classmethod
    def get_param_json(cls, root_path, company):
        return pandas.read_json(open(f'{root_path}/apps/analyzer/param/{company}.json', 'r'))

    @classmethod
    def get_original_feather_path(cls, root_path, company, feather_file_name):
        return cls.__get_feather_path(cls.ORIGINAL_FOLDER, root_path, company, feather_file_name)

    @classmethod
    def get_processed_feather_path(cls, root_path, company, feather_file_name):
        return cls.__get_feather_path(cls.PROCESSED_FOLDER, root_path, company, feather_file_name)

    @classmethod
    def get_merged_pkl_path(cls, root_path, company):
        return cls.__get_feather_path(cls.MERGED_FOLDER, root_path, company, company + '.pkl')

    @classmethod
    def get_merged_feather_path(cls, root_path, company):
        return cls.__get_feather_path(cls.MERGED_FOLDER, root_path, company, company + '.feather')

    @classmethod
    def get_merged_csv_path(cls, root_path, company):
        return cls.__get_feather_path(cls.MERGED_CSV_FOLDER, root_path, company, company + '.csv')

    @classmethod
    def __get_feather_path(cls, folder, root_path, company, feather_file_name):
        return f'{root_path}/{folder.replace(cls.COMPANY_NAME_REPLACE_KEYWORD, company)}/{feather_file_name}'

    @classmethod
    def create_feather_file(cls, feather_path, data_frame):
        pathlib.Path(feather_path)

        # Demandが欠損値のデータは使えないので削除しておく。
        data_frame = data_frame.dropna(subset=['demand'])
        data_frame.to_feather(feather_path)

    @classmethod
    def get_feather_file_name(cls, url):
        split_urls = url.split('/')
        csv_file_name = split_urls[-1]
        # 北海道電力とかExcelもいるので対応しておく。
        return csv_file_name.replace('.csv', '.feather').replace('.xls', '.feather')


    @classmethod
    def get_decoded_data(cls, url):
        redis_connection = redis.Redis(host='localhost', port=6379, db=0)
        if redis_connection.exists(url):
            decoded_data = pickle.loads(redis_connection.get(url))
        else:
            # CSV、もしくはExcelの元ネタを再読み込みする場合に、HPにアクセスしなくて済むようにRedisに格納している。
            decoded_data = RequestFunction.get_decoded_data(url)
            dumped = pickle.dumps(decoded_data, protocol=2)
            redis_connection.set(url, dumped)
        return decoded_data
