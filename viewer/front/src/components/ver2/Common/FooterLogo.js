import React from 'react'
import styled from 'styled-components';
import FooterLogoArea from './FooterLogoArea'

const FooterLogo = (props) => {

  const LogoArea = props.LogoArea;

  let VedasLogo = styled.div`
  width: 30%;

  display: inline-block;

  position: absolute;
  top: 160%;
  left: 48%;

  cursor: pointer;
  `;

  let PanairLogo = styled.div`
  width: 30%;

  display: inline-block;

  position: absolute;
  top: 160%;
  left: 92%;

  cursor: pointer;
  `;

  return (
    <div>
      <FooterLogoArea
        menu={props.menu}
        handleMenuChange={props.handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
        PanairLogo={PanairLogo}
      />
    </div>
  )
}

export default FooterLogo