import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import AnalyzeArea from '../../../components/ver2/EnergyCharts/AnalyzeArea'
import wordDictionaryService from '../../../services/word_dictionary'
import queryParamPerserService from '../../../services/query_param_perser'
import '../../../css/EnergyCharts.css';

const EnergyCharts = (props) => {

  const lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/home';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  //クエリパラメータ
  const qs = queryParamPerserService.execute(props.qs, lang);

  //言語選択
  let dict = wordDictionaryService.getV2(lang);

  return (
    <AnalyzeArea qs={qs} dict={dict} />
  )
}

export default EnergyCharts