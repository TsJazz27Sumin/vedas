import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../Common/FooterLogo'

const FooterLogoArea = (props) => {

  let LogoArea = styled.div`
  width: 60%;

  margin-top: 70px
  
  position: absolute;  
  `;

  if (isMobile) {
    LogoArea = styled(LogoArea)`
    margin-top: 50px;
    margin-bottom: 50px;
    `; 
  }

  return (
    <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
  )
}

export default FooterLogoArea