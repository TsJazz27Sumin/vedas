import React from 'react'
import { withRouter } from 'react-router';
import { AppProvider, Page, Layout, Frame, TextContainer } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

const HowToUse = (props) => {
  // const qs = props.query_param;
  // const language_initialize = qs.lang;

  const howtouse = (
    <Page title="How to use">
      <Layout>
        <Layout.Section>
        <TextContainer spacing="loose">
            <p>
              ファーストリリースは、日本全国の電源構成を見える化してみよう、というものです。
            </p>
            <p>
              とても簡単で、すぐに使い始めることができます。
            </p>
            <br/>
            <p>
              まず、年・月・日・1時間から集計単位を選択しましょう。
            </p>
            <p>
              例えば、月を選んだ場合、月単位に合算された電力データを見ることができます。
            </p>
            <p>画像１</p>
            <br/>
            <p>
              次に、送配電事業者を選びましょう。
            </p>
            <p>
              あなたのお住いが東京電力エリアだったら、東京電力にチェックを入れてみてもいいかもしれません。
            </p>
            <p>
              日々の生活で使われるでんきが何から作られているのか分かります。
            </p>
            <p>
              とりあえす「すべて」を選ぶのもOKです。
            </p>
            <p>画像２</p>
            <br/>
            <p>
              最後に、データの種別を選びましょう。
            </p>
            <p>
              気になるところをポチポチ、チェックしていってみましょう。
            </p>
            <p>
              ここまで来れば、チャートが表示されます。
            </p>
            <p>
              期間は、自由に変えて遊んでみましょう。
            </p>
            <p>画像３</p>
            <br/>
            <p>
              例えば、こんなことが分かります。
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
          {howtouse}
        </Frame>
      </AppProvider>
    </div>
  );
}

export default withRouter(HowToUse)
