import React, { useState, useCallback } from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, SettingToggle, TextStyle, Frame } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

const LanguageSetting = (props) => {
  const qs = props.query_param;
  const language_initialize = qs.lang;
  const [isDirtyJp, setIsDirtyJp] = useState(language_initialize !== "jp");
  const toggleIsDirtyJp = useCallback(
    () => {
      setIsDirtyEn(true);
      setIsDirtyCh(true);
      setIsDirtyEs(true);
      setIsDirtyJp((isDirtyJp) => !isDirtyJp);
      props.history.push('/?lang=jp');
    },
    // eslint-disable-next-line
    [],
  );

  const [isDirtyEn, setIsDirtyEn] = useState(language_initialize !== "en");
  const toggleIsDirtyEn = useCallback(
    () => {
      setIsDirtyJp(true);
      setIsDirtyCh(true);
      setIsDirtyEs(true);
      setIsDirtyEn((isDirtyEn) => !isDirtyEn);
      props.history.push('/?lang=en');
    },
    // eslint-disable-next-line
    [],
  );

  const [isDirtyCh, setIsDirtyCh] = useState(language_initialize !== "ch");
  const toggleIsDirtyCh = useCallback(
    () => {
      setIsDirtyJp(true);
      setIsDirtyEn(true);
      setIsDirtyEs(true);
      setIsDirtyCh((isDirtyCh) => !isDirtyCh);
      props.history.push('/?lang=ch');
    },
    // eslint-disable-next-line
    [],
  );

  const [isDirtyEs, setIsDirtyEs] = useState(language_initialize !== "es");
  const toggleIsDirtyEs = useCallback(
    () => {
      setIsDirtyJp(true);
      setIsDirtyEn(true);
      setIsDirtyCh(true);
      setIsDirtyEs((isDirtyEs) => !isDirtyEs);
      props.history.push('/?lang=es');
    },
    // eslint-disable-next-line
    [],
  );

  const pageMarkup = (
    <Page title="Language Setting">
      <Layout>
        <Layout.Section>
          <SettingToggle
            action={{
              content: 'はい',
              onAction: toggleIsDirtyJp,
              style: {padding:200}
            }}
            enabled={isDirtyJp}
          >
            <TextStyle variation="strong">日本語</TextStyle>で使いたいです。
          </SettingToggle>
        </Layout.Section>
        <Layout.Section>
          <SettingToggle
            action={{
              content: 'Yes',
              onAction: toggleIsDirtyEn,
            }}
            enabled={isDirtyEn}
          >
            I want to use it in <TextStyle variation="strong">English</TextStyle>.
          </SettingToggle>
        </Layout.Section>
        <Layout.Section>
          <SettingToggle
            action={{
              content: '是',
              onAction: toggleIsDirtyCh,
            }}
            enabled={isDirtyCh}
          >
            我想用<TextStyle variation="strong">中文</TextStyle>。
          </SettingToggle>
        </Layout.Section>
        <Layout.Section>
          <SettingToggle
            action={{
              content: 'Sí',
              onAction: toggleIsDirtyEs,
            }}
            enabled={isDirtyEs}
          >
            Quiero usarlo en <TextStyle variation="strong">español</TextStyle>.
          </SettingToggle>
        </Layout.Section>
      </Layout>
    </Page>
  );

  return (
    <div style={{ height: '250px' }}>
      <AppProvider>
        <Frame>
          {pageMarkup}
        </Frame>
      </AppProvider>
    </div>
  );
}

export default withRouter(LanguageSetting)
