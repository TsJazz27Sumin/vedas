import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, Card } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import VedasTopBar from '../../components/ver1/VedasTopBar'
import '../../css/Common_ver1.css';

const News = (props) => {

  const qs = props.query_param;
  const lang = props.lang;

  useEffect(() => {
    const pathname = '/' + lang + '/news';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const public_url = process.env.PUBLIC_URL;
  const news202001xx_01_image = public_url + '/ver1/news/202001xx_01.png';

  const news = (
    <Page title="News">
      <Layout>
        <Layout.Section>
          <Card title="2020.01.xx Fri あけましておめでとうございます。Vedasをリリースしました。" sectioned>
            <img width='90%' src={news202001xx_01_image} alt="news202001xx_01"/>
            <br/>
            <p>一般送配電事業者が公表している需給実績データを見える化するサイトをオープンしました。</p>
            <p>対象データは、最大で2016/04から2019/12までのデータとなります。</p>
            <p>※事業者によっては、多少期間が異なります。</p>
            <br/>
            <p>以下のサイトにてリリース関連情報として記事が投稿されていますので、合わせて確認いただけると幸いです。</p>
            <br/>
            <p>例）Qiita：xxx</p>
            <p>例）note：xxx</p>
            <p>※These articles are japanase only.</p>
            <br/>
            <p>例）medium：xxx</p>
            <p>※This article is english only.</p>
          </Card>
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
            {news}
          </Frame>
        </AppProvider>
      </div>
    </div>
  );
}

export default withRouter(News)
