import React from '../../../node_modules/react'
import styled from '../../../node_modules/styled-components';
import FooterLogoArea from './FooterLogoArea'

const FooterLogo = (props) => {

  const LogoArea = props.LogoArea;

  let VedasLogo = styled.div`
  height: 0%;
  width: 30%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 160%;
  left: 48%;
  right: 0%;
  bottom: 0%;

  display: inline-block;

  cursor: pointer;
  `;

  let PanairLogo = styled.div`
  height: 0%;
  width: 30%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 160%;
  left: 92%;
  right: 0%;
  bottom: 0%;

  display: inline-block;

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