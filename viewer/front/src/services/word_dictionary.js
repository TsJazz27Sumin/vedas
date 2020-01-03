import JpV2 from './language_files/jp'
import EnV2 from './language_files/en'
import ChV2 from './language_files/ch'


const getV2 = (lang) => {
    let dict = {};
    if (lang === 'en') {
        dict = EnV2.get();
    } else if (lang === 'jp') {
        dict = JpV2.get();
    } else if (lang === 'ch') {
        dict = ChV2.get();
    }
    return dict;
}

export default { getV2 }