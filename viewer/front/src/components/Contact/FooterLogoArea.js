import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../common/FooterLogo'

const FooterLogoArea = (props) => {

  let LogoArea = styled.div`
  height: 0%;
  width: 60%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  top: 88%;
  left: 0%;
  right: 0%
  bottom: 0%;
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