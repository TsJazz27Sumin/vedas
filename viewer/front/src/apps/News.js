import React from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

const News = (props) => {
  // const qs = props.query_param;
  // const language_initialize = qs.lang;

  const news = (
    <Page title="News">
      <Layout>
        <Layout.Section>

        </Layout.Section>
      </Layout>
    </Page>
  );

  return (
    <div style={{ height: '250px' }}>
      <AppProvider>
        <Frame>
          {news}
        </Frame>
      </AppProvider>
    </div>
  );
}

export default withRouter(News)
