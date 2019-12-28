import React from 'react'
import FooterLogoArea from '../../../components/ver2/FooterLogoArea'
import styled from 'styled-components';

const EnergyCharts = (props) => {

  const handleMenuChange = props.handleMenuChange;

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
      <div className="content">
          <p>contact</p>
        </div>
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