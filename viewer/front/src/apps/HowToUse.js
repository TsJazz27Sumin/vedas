import React from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, TextContainer } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import wordDictionaryService from '../services/word_dictionary'

const HowToUse = (props) => {
  const pathname = props.location.pathname;
  const qs = props.query_param;
  const lang = qs.lang;
  const dict = wordDictionaryService.get(lang);
  const public_url = process.env.PUBLIC_URL;
  const step1_image = public_url + '/howtouse/step1_' + lang + '.png';
  const step2_image = public_url + '/howtouse/step2_' + lang + '.png';
  const step3_image = public_url + '/howtouse/step3_' + lang + '.png';

  const howtouse = (
    <Page title="How to use">
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
            <p><a href={pathname + '?lang=' + lang + '&case=1'}>{dict.how_to_use_text14}</a></p>
            <p><a href={pathname + '?lang=' + lang + '&case=2'}>{dict.how_to_use_text15}</a></p>
            <p><a href={pathname + '?lang=' + lang + '&case=3'}>{dict.how_to_use_text16}</a></p>
            <p><a href={pathname + '?lang=' + lang + '&case=4'}>{dict.how_to_use_text17}</a></p>
            <p><a href={pathname + '?lang=' + lang + '&case=5'}>{dict.how_to_use_text18}</a></p>
            <p>{dict.how_to_use_text19}</p>
            <br/>
          </TextContainer>
        </Layout.Section>
      </Layout>
    </Page>
  );

  return (
    <div style={{ height: '250px' }}>
      <AppProvider>
        <Frame>
          {howtouse}
        </Frame>
      </AppProvider>
    </div>
  );
}

export default withRouter(HowToUse)
