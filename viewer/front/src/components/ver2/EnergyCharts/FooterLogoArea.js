import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../Common/FooterLogo'

const FooterLogoArea = (props) => {

  let LogoArea = styled.div`
    margin-top: 70px
    position: absolute;
    width: 60%;
  `;

  if (isMobile) {
    LogoArea = styled(LogoArea)`
      margin-top: 50px;
      margin-bottom: 50px;
    `; 
  }

  return (
    <FooterLogo LogoArea={LogoArea} handleMenuChange={props.handleMenuChange}/>
  )
}

export default FooterLogoArea