import Jp from './word_dictionary/ver1/jp'
import En from './word_dictionary/ver1/en'
import Ch from './word_dictionary/ver1/ch'
import Es from './word_dictionary/ver1/es'
import JpV2 from './word_dictionary/ver2/jp'
import EnV2 from './word_dictionary/ver2/en'
import ChV2 from './word_dictionary/ver2/ch'
import EsV2 from './word_dictionary/ver2/es'

const get = (lang) => {
    let dict = {};
    if (lang === 'en'){
        dict = En.get();
    } else if (lang === 'jp'){
        dict = Jp.get();
    } else if (lang === 'ch'){
        dict = Ch.get();
    } else if (lang === 'es'){
        dict = Es.get();
    }
    return dict;
  }

  const getV2 = (lang) => {
    let dict = {};
    if (lang === 'en'){
        dict = EnV2.get();
    } else if (lang === 'jp'){
        dict = JpV2.get();
    } else if (lang === 'ch'){
        dict = ChV2.get();
    } else if (lang === 'es'){
        dict = EsV2.get();
    }
    return dict;
  }
  
  export default { get, getV2 }