import React from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, TextContainer } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

const About = (props) => {
  // const qs = props.query_param;
  // const language_initialize = qs.lang;

  const about = (
    <Page title="About">
      <Layout>
        <Layout.Section>
          <TextContainer spacing="loose">
            <p>
              おもしろいものができそうだ。
            </p>
            <p>
              一人のエンジニアのそんな思いからスタートしました。
            </p>
            <br/>
            <p>
              愛称はVedas。
            </p>
            <br/>
            <p>
              日本の電力データを見える化してくれるプロダクトです。
            </p>
            <p>
              はじめは、Supply And Demand Viewer の頭文字を後ろから読んで Vdas にしようかと思いましたが、 
            </p>
            <p>
              すでに世にある製品で使用されていたので、Energy の E を入れて Vedas にしました。
            </p>
            <br/>
            <p>
              Veda 自体は、古代インドで編纂されたとされるインド最古の文献です。
            </p>
            <p>
              Veda という言葉には、知識という意味があります。
            </p>
            <br/>
            <p>
              そこに複数形の意味を込めて、sをつけてVedasという語呂合わせです。
            </p>
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
