import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from 'components/common/molecules/FooterLogo'

const FooterLogoArea = (props) => {

  const StyledComponents = getStyledComponents();
  const LogoArea = StyledComponents.LogoArea;

  return (
    <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
  )
}

const getStyledComponents = () => {

  let LogoArea = styled.div`
  width: 50%;
  
  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;

  //このままじゃないと位置が決まらない。
  top: 93%;
  `;
  
  if (isMobile) {
    LogoArea = styled(LogoArea)`
    width: 62%;
    
    margin-left: -2%;
    
    top: 93%;
    `;
  }

  return {
    LogoArea : LogoArea
  };
}

export default FooterLogoArea