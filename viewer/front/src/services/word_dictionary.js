import JP from './word_dictionary/jp'
import En from './word_dictionary/en'
import Ch from './word_dictionary/ch'
import Es from './word_dictionary/es'

const get = (lang) => {
    let dict = {};
    if (lang === 'en'){
        dict = En.get();
    } else if (lang === 'jp'){
        dict = JP.get();
    } else if (lang === 'ch'){
        dict = Ch.get();
    } else if (lang === 'es'){
        dict = Es.get();
    }
    return dict;
  }
  
  export default { get }