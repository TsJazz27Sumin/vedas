import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { AppProvider, Modal, TextContainer } from '@shopify/polaris';

const TabletMessage = () => {
  
  useEffect(() => {
    ReactGA.set({ page: '/tablet' });
    ReactGA.pageview('/tablet');
  });

  const action = () => {window.history.back(-1)};

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const public_url = process.env.PUBLIC_URL;
  const ny_image = public_url + '/tablet/ny' + (getRandomInt(2) + 1) + '.JPG';

  const ImageStyled = styled.img`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

    margin-top:10%;
    width:100%;
  `;

  const ModalDiv = styled.div`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル

    height: 500px;
  `;

  const BackGroundDiv = styled.div`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル
  
    background: #000;
  `;

  return (
    <BackGroundDiv>
      <AppProvider>
        <ImageStyled src={ny_image} alt="ny1"/>
        <ModalDiv>
          <Modal
            open={true}
            onClose={action}
            title="Thank you for coming this site! (^^)"
            primaryAction={{
              content: 'Back',
              onAction: action,
            }}
          >
            <Modal.Section>
              <TextContainer>
                <p>
                  現在タブレットデバイスでは使用できません。 デスクトップPCまたはノートブックPCの使用をお勧めします。 モバイル版の機能は制限されています。
                </p>
                <br/>
                <p>
                  But currently not available on tablet devices. We recommend using a desktop PC or notebook PC. The mobile version has limited functionality.
                </p>
                <br/>
                <p>
                  但目前不适用于平板电脑设备。 我们建议使用台式机或笔记本电脑。 移动版本的功能有限。
                </p>
              </TextContainer>
            </Modal.Section>
          </Modal>
        </ModalDiv>
      </AppProvider>
    </BackGroundDiv>
  );
}

export default TabletMessage