import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../Common/FooterLogo'

const FooterLogoArea = (props) => {

  let LogoArea = styled.div`
    position: absolute;
    width: 50%;
    top: 88%;
  `;
  
  if (isMobile) {
    LogoArea = styled(LogoArea)`
      width: 62%;
      top: 93%;
      margin-left: -2%;
    `;
  }

  return (
    <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
  )
}

export default FooterLogoArea