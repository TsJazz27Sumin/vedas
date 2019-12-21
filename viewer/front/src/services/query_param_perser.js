import analyzeCaseService from './analyze_case'

const execute = (query_param) => {

  const qs = query_param;
  const toBoolean = (data) => data.toLowerCase() === 'true';

  if(qs.case !== undefined){
    analyzeCaseService.convert_params(qs);
  }

  //言語選択
  const lang = (qs.lang === undefined) ? "jp" : qs.lang;

  //集計単位
  const electoric_power_data_initialize_params = {
    unit_initialize : (qs.unit_initialize === undefined) ? "ym" : qs.unit_initialize,
    range_from_value_initialize : qs.range_from_value_initialize,
    range_to_value_initialize : qs.range_to_value_initialize,
    year_initialize : qs.year_initialize,
    month_initialize : qs.month_initialize,
    date_initialize : qs.date_initialize,
    is_range_slider_open : (qs.is_range_slider_open === undefined) ? true : toBoolean(qs.is_range_slider_open),
  };
  
  //電力会社
  const energy_power_company_initialize_params = {
    hepcoChecked_initialize: (qs.hepcoChecked_initialize === undefined) ? false : toBoolean(qs.hepcoChecked_initialize),
    tohokuepcoChecked_initialize: (qs.tohokuepcoChecked_initialize === undefined) ? false : toBoolean(qs.tohokuepcoChecked_initialize),
    rikudenChecked_initialize: (qs.rikudenChecked_initialize === undefined) ? false : toBoolean(qs.rikudenChecked_initialize),
    //tepcoだけSampleでDefault is true.
    tepcoChecked_initialize: (qs.tepcoChecked_initialize === undefined) ? true : toBoolean(qs.tepcoChecked_initialize),
    chudenChecked_initialize: (qs.chudenChecked_initialize === undefined) ? false : toBoolean(qs.chudenChecked_initialize),
    kepcoChecked_initialize: (qs.kepcoChecked_initialize === undefined) ? false : toBoolean(qs.kepcoChecked_initialize),
    energiaChecked_initialize: (qs.energiaChecked_initialize === undefined) ? false : toBoolean(qs.energiaChecked_initialize),
    yondenChecked_initialize: (qs.yondenChecked_initialize === undefined) ? false : toBoolean(qs.yondenChecked_initialize),
    kyudenChecked_initialize: (qs.kyudenChecked_initialize === undefined) ? false : toBoolean(qs.kyudenChecked_initialize),
    okidenChecked_initialize: (qs.okidenChecked_initialize === undefined) ? false : toBoolean(qs.okidenChecked_initialize),
    japanChecked_initialize: (qs.japanChecked_initialize === undefined) ? false : toBoolean(qs.japanChecked_initialize),
  };

  //電源リソース
  const electoric_power_resourse_initialize_params = {
    //demandだけSampleでDefault is true.
    demandChecked_initialize: (qs.demandChecked_initialize === undefined) ? true : toBoolean(qs.demandChecked_initialize),
    nuclearChecked_initialize: (qs.nuclearChecked_initialize === undefined) ? false : toBoolean(qs.nuclearChecked_initialize),
    thermalChecked_initialize: (qs.thermalChecked_initialize === undefined) ? false : toBoolean(qs.thermalChecked_initialize),
    hydroChecked_initialize: (qs.hydroChecked_initialize === undefined) ? false : toBoolean(qs.hydroChecked_initialize),
    geothermalChecked_initialize: (qs.geothermalChecked_initialize === undefined) ? false : toBoolean(qs.geothermalChecked_initialize),
    biomassChecked_initialize: (qs.biomassChecked_initialize === undefined) ? false : toBoolean(qs.biomassChecked_initialize),
    solarChecked_initialize: (qs.solarChecked_initialize === undefined) ? false : toBoolean(qs.solarChecked_initialize),
    solarOutputControlChecked_initialize: (qs.solarOutputControlChecked_initialize === undefined) ? false : toBoolean(qs.solarOutputControlChecked_initialize),
    windChecked_initialize: (qs.windChecked_initialize === undefined) ? false : toBoolean(qs.windChecked_initialize),
    windOutputControlChecked_initialize: (qs.windOutputControlChecked_initialize === undefined) ? false : toBoolean(qs.windOutputControlChecked_initialize),
    pumpingChecked_initialize: (qs.pumpingChecked_initialize === undefined) ? false : toBoolean(qs.pumpingChecked_initialize),
    interconnectionChecked_initialize: (qs.interconnectionChecked_initialize === undefined) ? false : toBoolean(qs.interconnectionChecked_initialize),
  };

  return {
    lang, 
    electoric_power_data_initialize_params, 
    energy_power_company_initialize_params, 
    electoric_power_resourse_initialize_params
  }
}

export default { execute }
