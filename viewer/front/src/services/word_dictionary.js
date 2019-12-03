const get_word_dictionary = (lang) => {
    const word_dictionary = {
        "jp" : {
            "term_y": "年",
            "term_ym": "月",
            "term_ymd": "日",
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
            "term_y": "Year",
            "term_ym": "Month",
            "term_ymd": "Date",
            "green": "green power",
            "demand": "demand",
            "nuclear": "nuclear",
            "thermal": "thermal",
            "hydro": "hydro",
            "geothermal": "geothermal",
            "biomass": "biomass",
            "solar": "solar",
            "solar_output_control": "solar output control",
            "wind": "wind",
            "wind_output_control": "wind output control",
            "pumping": "pumping",
            "interconnection": "interconnection",
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
            "term_y": "年份",
            "term_ym": "月份",
            "term_ymd": "日期",
            "green": "绿色力量",
            "demand": "需求",
            "nuclear": "核电站",
            "thermal": "火力",
            "hydro": "水电",
            "geothermal": "地热",
            "biomass": "生物质",
            "solar": "太阳",
            "solar_output_control": "太阳控制",
            "wind": "风",
            "wind_output_control": "风控制",
            "pumping": "抽水",
            "interconnection": "互连线",
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
        },
        "es" : {
            "term_y": "Año",
            "term_ym": "Mes",
            "term_ymd": "Fecha",
            "green": "poder verde",
            "demand": "demanda",
            "nuclear": "nuclear",
            "thermal": "potencia de fuego",
            "hydro": "hidro",
            "geothermal": "Geotérmica",
            "biomass": "biomasa",
            "solar": "solar",
            "solar_output_control": "control de salida solar",
            "wind": "viento",
            "wind_output_control": "control de salida de viento",
            "pumping": "bombeo",
            "interconnection": "línea de interconexión",
            "title": "Gráficos de energía de Japón",
            "all": "Todos",
            "hepco": "Energía eléctrica de Hokkaido",
            "tohokuepco": "Energía eléctrica de Tohoku",
            "rikuden": "Energía eléctrica de Hokuriku",
            "tepco": "Energía eléctrica de Tokyo",
            "chuden": "Energía eléctrica de Chubu",
            "kepco": "Energía eléctrica de Kansai",
            "energia": "Energía eléctrica de Chugoku",
            "yonden": "Energía eléctrica Shikoku",
            "kyuden": "Energía eléctrica de Kyushu",
            "okiden": "Energía eléctrica de OKinawa"
        }
      };

    let dict = {};
    if (lang === 'en'){
        dict = word_dictionary.en;
    } else if (lang === 'jp'){
        dict = word_dictionary.jp;
    } else if (lang === 'ch'){
        dict = word_dictionary.ch;
    } else if (lang === 'es'){
        dict = word_dictionary.es;
    }
    return dict;
  }
  
  export default { get_word_dictionary }