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
  width:100%;

  margin-top:10%;  
  `;

  const ModalDiv = styled.div`
  height: 500px;
  `;

  const BackGroundDiv = styled.div`
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