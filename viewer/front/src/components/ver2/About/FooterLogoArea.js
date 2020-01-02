import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../Common/FooterLogo'

const FooterLogoArea = (props) => {
  
  let LogoArea = styled.div`
    position: absolute;
    width: 60%;
    top: 91%;
  `;

  if (isMobile) {
    LogoArea = styled(LogoArea)`
      top: 93.63%;
    `;
  }

  return (
    <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
  )
}

export default FooterLogoArea