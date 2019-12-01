const get_word_dictionary = (lang) => {
    const word_dictionary = {
        "jp" : {
            "title" : "日本の需給実績チャート",
            "all" : "すべて",
            "hepco" : "北海道電力",
            "tohokuepco" : "東北電力",
            "rikuden" : "北陸電力",
            "tepco" : "東京電力",
            "chuden" : "中部電力",
            "kepco" : "関西電力",
            "energia" : "中国電力",
            "yonden" : "四国電力",
            "kyuden" : "九州電力",
            "okiden" : "沖縄電力"
        },
        "en" : {
            "title" : "Japan Energy Charts",
            "all" : "All",
            "hepco" : "Hokkaido Electric Power",
            "tohokuepco" : "Tohoku Electric Power",
            "rikuden" : "Hokuriku Electric Power",
            "tepco" : "Tokyo Electric Power",
            "chuden" : "Chubu Electric Power",
            "kepco" : "Kansai Electric Power",
            "energia" : "Chugoku Electric Power",
            "yonden" : "Shikoku Electric Power",
            "kyuden" : "Kyushu Electric Power",
            "okiden" : "OKinawa Electric Power"
        },
        "ch" : {
            "title" : "日本能源图表",
            "all" : "所有",
            "hepco" : "北海道电力",
            "tohokuepco" : "东北电力",
            "rikuden" : "北陆电力",
            "tepco" : "东京电力",
            "chuden" : "中部电力",
            "kepco" : "关西电力",
            "energia" : "中国电力",
            "yonden" : "四国电力",
            "kyuden" : "九州电力",
            "okiden" : "冲绳电力"
        }
      };

    let dict = {};
    if (lang === 'en'){
    dict = word_dictionary.en;
    } else if (lang === 'jp'){
    dict = word_dictionary.jp;
    } else if (lang === 'ch'){
    dict = word_dictionary.ch;
    }
    return dict;
  }
  
  export default { get_word_dictionary }