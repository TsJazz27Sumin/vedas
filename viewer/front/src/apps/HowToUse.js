import React from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, TextContainer } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import wordDictionaryService from '../services/word_dictionary'

const HowToUse = (props) => {
  const qs = props.query_param;
  const language_initialize = qs.lang;
  const dict = wordDictionaryService.get(language_initialize);

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
            <p>画像１</p>
            <br/>
            <p>{dict.how_to_use_text5}</p>
            <p>{dict.how_to_use_text6}</p>
            <p>{dict.how_to_use_text7}</p>
            <p>{dict.how_to_use_text8}</p>
            <p>画像２</p>
            <br/>
            <p>{dict.how_to_use_text9}</p>
            <p>{dict.how_to_use_text10}</p>
            <p>{dict.how_to_use_text11}</p>
            <p>{dict.how_to_use_text12}</p>
            <p>画像３</p>
            <br/>
            <p>{dict.how_to_use_text13}</p>
            <p>{dict.how_to_use_text14}</p>
            <p>{dict.how_to_use_text15}</p>
            <p>{dict.how_to_use_text16}</p>
            <p>{dict.how_to_use_text17}</p>
            <p>{dict.how_to_use_text18}</p>
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
