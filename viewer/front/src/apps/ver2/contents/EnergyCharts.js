import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import AnalyzeArea from '../../../components/ver2/EnergyCharts/AnalyzeArea'
import queryParamPerserService from '../../../services/query_param_perser'
import '../../../css/EnergyCharts.css';

const EnergyCharts = (props) => {

  const lang = props.lang;
  const pathname = props.pathname;

  useEffect(() => {
    console.log(pathname);
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  //クエリパラメータ
  const qs = queryParamPerserService.execute(props.qs, lang);

  return (
    <AnalyzeArea qs={qs} dict={props.dict} />
  )
}

export default EnergyCharts