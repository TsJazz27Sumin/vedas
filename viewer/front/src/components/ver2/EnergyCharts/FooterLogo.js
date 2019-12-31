import React from 'react'
import styled from 'styled-components';
import FooterLogoArea from '../../../components/ver2/FooterLogoArea'

const FooterLogo = (props) => {

  const handleMenuChange = props.handleMenuChange;

  let LogoArea = styled.div`
    position: absolute;
    width: 60%;
    top: 97%;
  `;

  let VedasLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 48%;
    cursor: pointer;
  `;

  let PanairLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 92%;
    cursor: pointer;
  `;

  return (
    <div>
      <FooterLogoArea
        handleMenuChange={handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
        PanairLogo={PanairLogo}
      />
    </div>
  )
}

export default FooterLogo