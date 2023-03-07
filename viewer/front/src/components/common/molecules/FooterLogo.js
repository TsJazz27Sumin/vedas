import React from 'react'
import styled from 'styled-components';
import FooterLogoArea from 'components/common/molecules/FooterLogoArea'

const FooterLogo = (props) => {

  const LogoArea = props.LogoArea;
  const StyledComponents = getStyledComponents();
  const VedasLogo = StyledComponents.VedasLogo;
  
  return (
    <div>
      <FooterLogoArea
        menu={props.menu}
        handleMenuChange={props.handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
      />
    </div>
  )
}

const getStyledComponents = () => {

  let VedasLogo = styled.div`
  height: 0%;
  width: 30%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 160%;
  left: 70%;
  right: 0%;
  bottom: 0%;

  display: inline-block;

  cursor: pointer;
  `;

  return {
    VedasLogo : VedasLogo
  };
}

export default FooterLogo