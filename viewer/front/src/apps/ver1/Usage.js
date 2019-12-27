import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, TextContainer, Link } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import VedasTopBar from '../../components/ver1/VedasTopBar'
import wordDictionaryService from '../../services/word_dictionary'

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const Usage = (props) => {

  const qs = props.query_param;
  const lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/usage';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const dict = wordDictionaryService.get(lang);
  const public_url = process.env.PUBLIC_URL;
  const step1_image = public_url + '/usage/step1_' + lang + '.png';
  const step2_image = public_url + '/usage/step2_' + lang + '.png';
  const step3_image = public_url + '/usage/step3_' + lang + '.png';

  const howtouse = (
    <Page title="Usage">
      <Layout>
        <Layout.Section>
          <TextContainer spacing="loose">
            <p>{dict.how_to_use_text1}</p>
            <p>{dict.how_to_use_text2}</p>
            <br/>
            <p>{dict.how_to_use_text3}</p>
            <p>{dict.how_to_use_text4}</p>
            <br/>
            <img width='50%' src={step1_image} alt="step1"/>
            <br/>
            <p>{dict.how_to_use_text5}</p>
            <p>{dict.how_to_use_text6}</p>
            <p>{dict.how_to_use_text7}</p>
            <p>{dict.how_to_use_text8}</p>
            <br/>
            <img width='80%' src={step2_image} alt="step2"/>
            <br/>
            <br/>
            <p>{dict.how_to_use_text9}</p>
            <p>{dict.how_to_use_text10}</p>
            <p>{dict.how_to_use_text11}</p>
            <p>{dict.how_to_use_text12}</p>
            <br/>
            <img width='80%' src={step3_image} alt="step3"/>
            <br/>
            <br/>
            <p>{dict.how_to_use_text13}</p>
            <p><Link id="case1" url={baseUrl + '?lang=' + lang + '&case=1&version=1'}>{dict.how_to_use_text14}</Link></p>
            <p><Link id="case2" url={baseUrl + '?lang=' + lang + '&case=2&version=1'}>{dict.how_to_use_text15}</Link></p>
            <p><Link id="case3" url={baseUrl + '?lang=' + lang + '&case=3&version=1'}>{dict.how_to_use_text16}</Link></p>
            <p><Link id="case4" url={baseUrl + '?lang=' + lang + '&case=4&version=1'}>{dict.how_to_use_text17}</Link></p>
            <p><Link id="case5" url={baseUrl + '?lang=' + lang + '&case=5&version=1'}>{dict.how_to_use_text18}</Link></p>
            <p>{dict.how_to_use_text19}</p>
            <br/>
          </TextContainer>
        </Layout.Section>
      </Layout>
    </Page>
  );

  return (
    <div>
      <VedasTopBar location={props.location} qs={qs} lang={lang}/>
      <div style={{ height: '250px' }}>
        <AppProvider>
          <Frame>
            {howtouse}
          </Frame>
        </AppProvider>
      </div>
    </div>
  );
}

export default withRouter(Usage)
