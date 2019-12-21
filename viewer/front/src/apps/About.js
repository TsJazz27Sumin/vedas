import React from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, TextContainer } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import wordDictionaryService from '../services/word_dictionary'

const About = (props) => {
  const qs = props.query_param;
  const language_initialize = qs.lang;
  const dict = wordDictionaryService.get(language_initialize);

  const about = (
    <Page title="About">
      <Layout>
        <Layout.Section>
          <TextContainer spacing="loose">
            <p>{dict.about_text1}</p>
            <p>{dict.about_text2}
            </p>
            <br/>
            <p>{dict.about_text3}
            </p>
            <br/>
            <p>{dict.about_text4}</p>
            <p>{dict.about_text5}</p>
            <p>{dict.about_text6}</p>
            <br/>
            <p>{dict.about_text7}</p>
            <p>{dict.about_text8}</p>
            <br/>
            <p>{dict.about_text9}</p>
          </TextContainer>
        </Layout.Section>
      </Layout>
    </Page>
  );

  return (
    <div style={{ height: '250px' }}>
      <AppProvider>
        <Frame>
          {about}
        </Frame>
      </AppProvider>
    </div>
  );
}

export default withRouter(About)
