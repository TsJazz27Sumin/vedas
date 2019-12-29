import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FooterLogoArea from '../../../components/ver2/FooterLogoArea'
import styled from 'styled-components';

const EnergyCharts = (props) => {

  const lang = props.lang;
  const handleMenuChange = props.handleMenuChange;

  useEffect(() => {
    const pathname = '/' + lang + '/home';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const AnalyzeArea = styled.div`
    height: 200%;
    width: 91%;
    position: absolute;
    padding-top: 10%;
    left: 4.1%;
    right: 4.1%;
    top: 140%;
    bottom: 10.65%;
    background: #EFEFEF;
    border-radius: 54px;
` ;

  const Content = styled.div`
    position: absolute;
    width: 56%;
    height: 50%;
    left: 23%;
    top: 20%;

    background: #fff;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 16px;
  `;

  const LogoArea = styled.div`
    position: absolute;
    width: 60%;
    height: 32%;
  `;

  const VedasLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 48%;
    cursor: pointer;
  `;

  const PanairLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 92%;
    cursor: pointer;
  `;

  return (
    <AnalyzeArea>
      <Content>
        <p>contact</p>
      </Content>
      <FooterLogoArea
        handleMenuChange={handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
        PanairLogo={PanairLogo}
      />
    </AnalyzeArea>
  )
}

export default EnergyCharts