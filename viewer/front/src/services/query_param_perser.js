import analyzeCaseService from './analyze_case'

const execute = (query_param, language) => {

  const qs = query_param;
  const toBoolean = (data) => data.toLowerCase() === 'true';

  if(qs.case !== undefined){
    analyzeCaseService.convert_params(qs);
  }

  //言語選択
  const lang = (language === undefined) ? "jp" : language;
  //1 1=jp 2=en 3=ch 4=es

  //集計単位
  const electoric_power_data_initialize_params = {
    unit_initialize : (qs.unit_initialize === undefined) ? "ym" : qs.unit_initialize,
    //2 1=y 2=ym 3=ymd 4=1H
    range_from_value_initialize : qs.range_from_value_initialize,
    //3 201901 000000
    range_to_value_initialize : qs.range_to_value_initialize,
    //4 201912 000000
    year_initialize : qs.year_initialize,
    //5 2019 0000
    month_initialize : qs.month_initialize,
    //6 12 00
    date_initialize : qs.date_initialize,
    //7 01 00
    is_range_slider_open : (qs.is_range_slider_open === undefined) ? true : toBoolean(qs.is_range_slider_open),
    //8 1=true 2=false
  };
  
  //電力会社
  const energy_power_company_initialize_params = {
    hepcoChecked_initialize: (qs.hepcoChecked_initialize === undefined) ? false : toBoolean(qs.hepcoChecked_initialize),
    //8 1=true 2=false
    tohokuepcoChecked_initialize: (qs.tohokuepcoChecked_initialize === undefined) ? false : toBoolean(qs.tohokuepcoChecked_initialize),
    //9 1=true 2=false
    rikudenChecked_initialize: (qs.rikudenChecked_initialize === undefined) ? false : toBoolean(qs.rikudenChecked_initialize),
    //10 1=true 2=false
    tepcoChecked_initialize: (qs.tepcoChecked_initialize === undefined) ? false : toBoolean(qs.tepcoChecked_initialize),
    //11 1=true 2=false
    chudenChecked_initialize: (qs.chudenChecked_initialize === undefined) ? false : toBoolean(qs.chudenChecked_initialize),
    //12 1=true 2=false
    kepcoChecked_initialize: (qs.kepcoChecked_initialize === undefined) ? false : toBoolean(qs.kepcoChecked_initialize),
    //13 1=true 2=false
    energiaChecked_initialize: (qs.energiaChecked_initialize === undefined) ? false : toBoolean(qs.energiaChecked_initialize),
    //14 1=true 2=false
    yondenChecked_initialize: (qs.yondenChecked_initialize === undefined) ? false : toBoolean(qs.yondenChecked_initialize),
    //15 1=true 2=false
    kyudenChecked_initialize: (qs.kyudenChecked_initialize === undefined) ? false : toBoolean(qs.kyudenChecked_initialize),
    //16 1=true 2=false
    okidenChecked_initialize: (qs.okidenChecked_initialize === undefined) ? false : toBoolean(qs.okidenChecked_initialize),
    //17 1=true 2=false
    //japanだけSampleでDefault is true.
    japanChecked_initialize: (qs.japanChecked_initialize === undefined) ? true : toBoolean(qs.japanChecked_initialize),
    //18 1=true 2=false
  };

  //電源リソース
  const electoric_power_resourse_initialize_params = {
    //demandだけSampleでDefault is true.
    demandChecked_initialize: (qs.demandChecked_initialize === undefined) ? true : toBoolean(qs.demandChecked_initialize),
    //19 1=true 2=false
    nuclearChecked_initialize: (qs.nuclearChecked_initialize === undefined) ? false : toBoolean(qs.nuclearChecked_initialize),
    //20 1=true 2=false
    //thermalだけSampleでDefault is true.
    thermalChecked_initialize: (qs.thermalChecked_initialize === undefined) ? true : toBoolean(qs.thermalChecked_initialize),
    //21 1=true 2=false
    hydroChecked_initialize: (qs.hydroChecked_initialize === undefined) ? false : toBoolean(qs.hydroChecked_initialize),
    //22 1=true 2=false
    geothermalChecked_initialize: (qs.geothermalChecked_initialize === undefined) ? false : toBoolean(qs.geothermalChecked_initialize),
    //23 1=true 2=false
    biomassChecked_initialize: (qs.biomassChecked_initialize === undefined) ? false : toBoolean(qs.biomassChecked_initialize),
    //24 1=true 2=false
    solarChecked_initialize: (qs.solarChecked_initialize === undefined) ? false : toBoolean(qs.solarChecked_initialize),
    //25 1=true 2=false
    solarOutputControlChecked_initialize: (qs.solarOutputControlChecked_initialize === undefined) ? false : toBoolean(qs.solarOutputControlChecked_initialize),
    //26 1=true 2=false
    windChecked_initialize: (qs.windChecked_initialize === undefined) ? false : toBoolean(qs.windChecked_initialize),
    //27 1=true 2=false
    windOutputControlChecked_initialize: (qs.windOutputControlChecked_initialize === undefined) ? false : toBoolean(qs.windOutputControlChecked_initialize),
    //28 1=true 2=false
    pumpingChecked_initialize: (qs.pumpingChecked_initialize === undefined) ? false : toBoolean(qs.pumpingChecked_initialize),
    //29 1=true 2=false
    interconnectionChecked_initialize: (qs.interconnectionChecked_initialize === undefined) ? false : toBoolean(qs.interconnectionChecked_initialize),
    //30 1=true 2=false
  };

  return {
    lang, 
    electoric_power_data_initialize_params, 
    energy_power_company_initialize_params, 
    electoric_power_resourse_initialize_params
  }
}

export default { execute }
