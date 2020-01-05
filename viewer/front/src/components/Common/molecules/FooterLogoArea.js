import React from 'react'
import FooterVedasLogo from '../atoms/FooterVedasLogo'
import FooterPanairLogo from '../atoms/FooterPanairLogo'

const FooterLogoArea = (props) => {
  
  const LogoArea = props.LogoArea;
  const VedasLogo = props.VedasLogo;
  const PanairLogo = props.PanairLogo;

  return (
    <LogoArea>
      <VedasLogo>
        <FooterVedasLogo handleMenuChange={props.handleMenuChange} />
      </VedasLogo>
      <PanairLogo>
        <FooterPanairLogo menu={props.menu}/>
      </PanairLogo>
    </LogoArea>
  )
}

export default FooterLogoArea