const get = () => {
    const word_dictionary = {
        "sample_news2": "(sample) １月分のデータを更新しました。",
        "sample_news1": "(sample) あけましておめでとうございます。Vedasをリリースしました。",
        "contact_place_folder1": "パネイル　太郎",
        "contact_place_folder2": "contact@vedas.jp",
        "contact_text1": "Vedasについてお問い合わせなどがございましたら、必要な情報をご記入の上、お問い合わせください。",
        "contact_text2": "お返事につきましては、内容により時間がかかったり、お返事しかねる場合がありますことを予めご了承ください。",
        "contact_note": "※ English is also available. ",
        "contact_item_name": "名前",
        "contact_item_mail": "メールアドレス",
        "contact_item_input": "お問い合わせ内容",
        "contact_text3": "個人情報の収集及び利用目的について",
        "contact_text4": "当社の",
        "contact_text5": "個人情報のお取り扱い方針",
        "contact_text6": "についてご確認ください。",
        "contact_text7": "上記にご同意頂ける方は「同意して送信する」ボタンを押してください。",
        "contact_submit": "同意して送信する",
        "contact_complete": "お問い合わせありがとうございます。",
        "how_to_use_text1": "ファーストリリースは、日本全国の電源構成を見える化です。",
        "how_to_use_text2": "とても簡単で、すぐに使い始めることができます。",
        "how_to_use_text3": "まず、年・月・日・1時間から集計単位を選択しましょう。",
        "how_to_use_text4": "例えば、月を選んだ場合、月単位に合算された電力データを見ることができます。",
        "how_to_use_text5": "次に、送配電事業者を選びましょう。",
        "how_to_use_text6": "あなたのお住いが東京電力エリアだったら、東京電力にチェックを入れてみてもいいかもしれません。",
        "how_to_use_text7": "日々の生活で使われるでんきが何から作られているのか分かります。",
        "how_to_use_text8": "とりあえす「すべて」を選ぶのもOKです。",
        "how_to_use_text9": "最後に、データの種別を選びましょう。",
        "how_to_use_text10": "気になるところをポチポチ、チェックしていってみましょう。",
        "how_to_use_text11": "ここまで来れば、チャートが表示されます。",
        "how_to_use_text12": "期間は、自由に変えて遊んでみましょう。",
        "how_to_use_text13": "例えば、こんなことが分かります。",
        "how_to_use_text14": "１．日本全国の太陽光出力は上昇傾向にある。",
        "how_to_use_text15": "２．北海道、東京、沖縄で電力のピーク傾向が違う。",
        "how_to_use_text16": "３．九州電力管内では、太陽光で昼間の総需要の大半を補う日が出てきている。",
        "how_to_use_text17": "４．日本は、総需要の大半を火力依存でカバーしている。",
        "how_to_use_text18": "５．日本のグリーン電力（水力、地熱、バイオマス、太陽光、風力）の中では、水力と太陽光が強い。",
        "how_to_use_text19": "あなたのでんきについての「！」を見つけてみてください。",
        "about_text1": "おもしろいものができそうだ。",
        "about_text2": "一人のエンジニアのそんな思いからスタートしました。",
        "about_text3": "愛称はVedas。",
        "about_text4": "日本の電力データを見える化してくれるプロダクトです。",
        "about_text5": "はじめは、Supply And Demand Viewer の頭文字を後ろから読んで Vdas にしようかと思いましたが、",
        "about_text6": "すでに世にある製品で使用されていたので、Energy の E を入れて Vedas にしました。",
        "about_text7": "Veda 自体は、古代インドで編纂されたとされるインド最古の文献です。",
        "about_text8": "Veda という言葉には、知識という意味があります。",
        "about_text9": "そこに複数形の意味を込めて、sをつけてVedasという語呂合わせです。",
        "jurisdiction": "管内",
        "watchout": "留意事項",
        "watchout_info1": "当社は、本アプリケーションの利用者が、本アプリケーションに依拠し、",
        "watchout_info2": "または本アプリケーションの情報を信頼して行った行動などにより被った、いかなる生命、身体、財産上の損失又は損害についても責任を負いかねます。",
        "watchout_info3": "使用しているデータは、経済産業省 資源エネルギー庁の「系統情報の公表考え方」に基づき、一般送配電事業者が公表している需給実績となります。",
        "watchout_info4": "データについての留意事項につきましては、各一般送配電事業者のホームページをご確認ください。",
        "watchout_info5": " ",
        "no_data": "対象期間のデータがありません。",
        "term": "期間",
        "unit_y": "年",
        "unit_ym": "月",
        "unit_ymd": "日",
        "unit_1h": "1時間",
        "green": "グリーン電力",
        "demand": "需要",
        "nuclear": "原発",
        "thermal": "火力",
        "hydro": "水力",
        "geothermal": "地熱",
        "biomass": "バイオマス",
        "solar": "太陽光",
        "solar_output_control": "太陽光出力制御",
        "wind": "風力",
        "wind_output_control": "風力出力制御",
        "pumping": "揚水",
        "interconnection": "連系線",
        "title": "Vedas：日本の需給実績チャート",
        "all": "すべて",
        "hepco": "北海道電力",
        "tohokuepco": "東北電力",
        "rikuden": "北陸電力",
        "tepco": "東京電力",
        "chuden": "中部電力",
        "kepco": "関西電力",
        "energia": "中国電力",
        "yonden": "四国電力",
        "kyuden": "九州電力",
        "okiden": "沖縄電力",
        "japan": "日本全国"
    };

    return word_dictionary;
}

export default { get }