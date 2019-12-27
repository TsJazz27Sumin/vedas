import React, { useState, useCallback, useEffect } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, SettingToggle, TextStyle, Frame } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import VedasTopBar from '../../components/ver1/VedasTopBar'

const LanguageSetting = (props) => {

  const qs = props.query_param;
  const lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/language_setting';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const [isDirtyJp, setIsDirtyJp] = useState(lang !== "jp");
  const toggleIsDirtyJp = useCallback(
    () => {
      setIsDirtyEn(true);
      setIsDirtyCh(true);
      setIsDirtyEs(true);
      setIsDirtyJp((isDirtyJp) => !isDirtyJp);
      props.history.push('?lang=jp&menu=home');
    },
    // eslint-disable-next-line
    [],
  );

  const [isDirtyEn, setIsDirtyEn] = useState(lang !== "en");
  const toggleIsDirtyEn = useCallback(
    () => {
      setIsDirtyJp(true);
      setIsDirtyCh(true);
      setIsDirtyEs(true);
      setIsDirtyEn((isDirtyEn) => !isDirtyEn);
      props.history.push('?lang=en&menu=home');
    },
    // eslint-disable-next-line
    [],
  );

  const [isDirtyCh, setIsDirtyCh] = useState(lang !== "ch");
  const toggleIsDirtyCh = useCallback(
    () => {
      setIsDirtyJp(true);
      setIsDirtyEn(true);
      setIsDirtyEs(true);
      setIsDirtyCh((isDirtyCh) => !isDirtyCh);
      props.history.push('?lang=ch&menu=home');
    },
    // eslint-disable-next-line
    [],
  );

  const [isDirtyEs, setIsDirtyEs] = useState(lang !== "es");
  const toggleIsDirtyEs = useCallback(
    () => {
      setIsDirtyJp(true);
      setIsDirtyEn(true);
      setIsDirtyCh(true);
      setIsDirtyEs((isDirtyEs) => !isDirtyEs);
      props.history.push('?lang=es&menu=home');
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
    <div>
      <VedasTopBar location={props.location} qs={qs} lang={lang}/>
      <div style={{ height: '250px' }}>
        <AppProvider>
          <Frame>
            {pageMarkup}
          </Frame>
        </AppProvider>
      </div>
    </div>
  );
}

export default withRouter(LanguageSetting)
