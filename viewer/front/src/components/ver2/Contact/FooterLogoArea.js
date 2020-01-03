import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../Common/FooterLogo'

const FooterLogoArea = (props) => {

  let LogoArea = styled.div`
  width: 60%;
  
  position: absolute;
  top: 88%;
  `;

  if (isMobile) {
    LogoArea = styled(LogoArea)`
    width: 62%;
    
    padding-left: 1%;

    top: 94%;
    `;
  }

  return (
    <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
  )
}

export default FooterLogoArea