const convert_params = (qs) => {

    switch (qs.case) {
        //日本全国の太陽光出力は上昇傾向にある。
        case "1":
          qs.unit_initialize = "ym";
          qs.is_range_slider_open = "true";
          qs.range_from_value_initialize = "0";
          qs.hepcoChecked_initialize = "true";
          qs.tohokuepcoChecked_initialize = "true";
          qs.rikudenChecked_initialize = "true";
          qs.tepcoChecked_initialize = "true";
          qs.chudenChecked_initialize = "true";
          qs.kepcoChecked_initialize = "true";
          qs.energiaChecked_initialize = "true";
          qs.yondenChecked_initialize = "true";
          qs.kyudenChecked_initialize = "true";
          qs.okidenChecked_initialize = "true";
          qs.demandChecked_initialize = "false";
          qs.solarChecked_initialize = "true";
          break;
        //北海道、東京、沖縄で電力のピーク傾向が違う。
        case "2":
          qs.unit_initialize = "ym";
          qs.is_range_slider_open = "true";
          qs.range_from_value_initialize = "0";
          qs.hepcoChecked_initialize = "true";
          qs.tepcoChecked_initialize = "true";
          qs.okidenChecked_initialize = "true";
          qs.demandChecked_initialize = "true";
          break;
        //九州電力管内では、太陽光で昼間の総需要の大半を補う日が出てきている。
        case "3":
          qs.unit_initialize = "1H";
          qs.is_range_slider_open = "false";
          qs.tepcoChecked_initialize = "false";
          qs.kyudenChecked_initialize = "true";
          qs.demandChecked_initialize = "true";
          qs.solarChecked_initialize = "true";
          qs.year_initialize = "2019";
          qs.month_initialize = "5";
          qs.date_initialize = "3";
          break;
        //日本は、総需要の大半を火力依存でカバーしている。
        case "4":
          qs.unit_initialize = "ym";
          qs.is_range_slider_open = "true";
          qs.range_from_value_initialize = "0";
          qs.hepcoChecked_initialize = "true";
          qs.tohokuepcoChecked_initialize = "true";
          qs.rikudenChecked_initialize = "true";
          qs.tepcoChecked_initialize = "true";
          qs.chudenChecked_initialize = "true";
          qs.kepcoChecked_initialize = "true";
          qs.energiaChecked_initialize = "true";
          qs.yondenChecked_initialize = "true";
          qs.kyudenChecked_initialize = "true";
          qs.okidenChecked_initialize = "true";
          qs.demandChecked_initialize = "true";
          qs.thermalChecked_initialize = "true";
          break;
        //日本のグリーン電力（水力、地熱、バイオマス、太陽光、風力）の中では、水力と太陽光が強い。
        case "5":
          qs.unit_initialize = "ym";
          qs.is_range_slider_open = "true";
          qs.range_from_value_initialize = "0";
          qs.hepcoChecked_initialize = "true";
          qs.tohokuepcoChecked_initialize = "true";
          qs.rikudenChecked_initialize = "true";
          qs.tepcoChecked_initialize = "true";
          qs.chudenChecked_initialize = "true";
          qs.kepcoChecked_initialize = "true";
          qs.energiaChecked_initialize = "true";
          qs.yondenChecked_initialize = "true";
          qs.kyudenChecked_initialize = "true";
          qs.okidenChecked_initialize = "true";
          qs.demandChecked_initialize = "false";
          qs.hydroChecked_initialize = "true";
          qs.geothermalChecked_initialize = "true";
          qs.biomassChecked_initialize = "true";
          qs.solarChecked_initialize = "true";
          qs.windChecked_initialize = "true";
          break;
        default:
        //nothing
      };
  
    return qs
  }
  
  export default { convert_params }
