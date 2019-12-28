import React from 'react'
import FooterVedasLogo from './FooterVedasLogo'
import FooterPanairLogo from './FooterPanairLogo'

const FooterLogoArea = (props) => {

  const handleMenuChange = props.handleMenuChange;
  const LogoArea = props.LogoArea;
  const VedasLogo = props.VedasLogo;
  const PanairLogo = props.PanairLogo;

  return (
    <LogoArea>
      <VedasLogo>
        <FooterVedasLogo handleMenuChange={handleMenuChange} />
      </VedasLogo>
      <PanairLogo>
        <FooterPanairLogo />
      </PanairLogo>
    </LogoArea>
  )
}

export default FooterLogoArea