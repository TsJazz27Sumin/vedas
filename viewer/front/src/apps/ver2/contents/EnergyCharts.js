import React from 'react'
import FooterLogoArea from '../../../components/ver2/FooterLogoArea'
import styled from 'styled-components';

const EnergyCharts = (props) => {

  const handleMenuChange = props.handleMenuChange;

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
    <div className="analyze-area">
      <Content>
        <p>contact</p>
      </Content>
      <FooterLogoArea
        handleMenuChange={handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
        PanairLogo={PanairLogo}
      />
    </div>
  )
}

export default EnergyCharts