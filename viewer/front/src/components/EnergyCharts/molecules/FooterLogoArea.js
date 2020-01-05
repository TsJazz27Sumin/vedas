import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../../common/molecules/FooterLogo'

const FooterLogoArea = (props) => {

  const StyledComponents = getStyledComponents();
  const LogoArea = StyledComponents.LogoArea;

  return (
    <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
  )
}

const getStyledComponents = () => {

  let LogoArea = styled.div`
  height: auto;
  width: 60%;

  padding: 0% 0% 0% 0%;
  margin:  5% 0% 0% 0%;
  
  position: absolute;  
  `;

  if (isMobile) {
    LogoArea = styled(LogoArea)`
    margin-top: 50px;
    margin-bottom: 50px;
    `; 
  }

  return {
    LogoArea : LogoArea
  };
}

export default FooterLogoArea