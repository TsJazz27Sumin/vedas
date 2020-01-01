import React from 'react'
import styled from 'styled-components';
import FooterLogoArea from './FooterLogoArea'

const FooterLogo = (props) => {

  const LogoArea = props.LogoArea;
  const handleMenuChange = props.handleMenuChange;

  let VedasLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 48%;
    cursor: pointer;
  `;

  let PanairLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 92%;
    cursor: pointer;
  `;

  return (
    <div>
      <FooterLogoArea
        handleMenuChange={handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
        PanairLogo={PanairLogo}
      />
    </div>
  )
}

export default FooterLogo