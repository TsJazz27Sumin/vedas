import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../common/molecules/FooterLogo'

const FooterLogoArea = (props) => {

  let LogoArea = styled.div`
  width: 50%;
  
  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;

  //このままじゃないと位置が決まらない。
  top: 88%;
  `;
  
  if (isMobile) {
    LogoArea = styled(LogoArea)`
    width: 62%;
    
    margin-left: -2%;
    
    top: 93%;
    `;
  }

  return (
    <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
  )
}

export default FooterLogoArea