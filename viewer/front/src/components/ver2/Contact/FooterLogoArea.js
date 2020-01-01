import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../Common/FooterLogo'

const FooterLogoArea = (props) => {

  let LogoArea = styled.div`
    position: absolute;
    width: 60%;
    top: 88%;
  `;

  if (isMobile) {
    LogoArea = styled(LogoArea)`
      width: 62%;
      top: 94%;
      padding-left: 1%;
    `;
  }

  return (
    <FooterLogo LogoArea={LogoArea} handleMenuChange={props.handleMenuChange}/>
  )
}

export default FooterLogoArea