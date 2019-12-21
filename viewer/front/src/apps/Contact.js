import React from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

const Contact = (props) => {
  // const qs = props.query_param;
  // const language_initialize = qs.lang;

  const contact = (
    <Page title="Contact">
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
          {contact}
        </Frame>
      </AppProvider>
    </div>
  );
}

export default withRouter(Contact)
