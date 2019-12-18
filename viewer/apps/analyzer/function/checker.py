import difflib

from viewer.apps.analyzer.function.file import FileFunction
from viewer.apps.analyzer.function.request import RequestFunction


class CheckerFunction(object):

    @classmethod
    def check_download_page(cls, root_path, companyname, omit_list):
        json = FileFunction.get_param_json(root_path, companyname)
        html = RequestFunction.get_html(json['download_page_url'])
        FileFunction.create_current_html(root_path, companyname, html)
        check_result, message = cls.check_diff_current_and_prev_html(root_path, companyname, omit_list)

        return check_result, message

    @classmethod
    def check_diff_current_and_prev_html(cls, root_path, company, omit_list):
        current_html_path = FileFunction.get_current_html_path(root_path, company)
        with open(current_html_path) as current_html:
            current_html_lines = current_html.readlines()

        prev_html_path = FileFunction.get_prev_html_path(root_path, company)
        with open(prev_html_path) as prev_html:
            prev_html_lines = prev_html.readlines()

        diff_lines = []
        for diff_line in difflib.unified_diff(
                current_html_lines,
                prev_html_lines,
                fromfile=current_html_path,
                tofile=prev_html_path):

            diff_line = diff_line.replace(" ", "").replace("　", "")
            if len(diff_line):
                continue

            omit_result = False
            for omit_word in omit_list:
                if omit_word in diff_line:
                    omit_result = True
                    break

            if omit_result is False:
                diff_lines.append(diff_line)

        if len(diff_lines) > 0:
            # TODO:Slackでアラート飛ばすとかにしたい。
            for diff_line in diff_lines:
                print(company)
                print(diff_line)
            return False, 'There is diff between current and prev.'

        return True, 'Current is the same as prev.'
