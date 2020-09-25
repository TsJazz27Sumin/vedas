import React from 'react'
import FooterVedasLogo from 'components/common/atoms/FooterVedasLogo'

const FooterLogoArea = (props) => {
  
  const LogoArea = props.LogoArea;
  const VedasLogo = props.VedasLogo;

  return (
    <LogoArea>
      <VedasLogo>
        <FooterVedasLogo handleMenuChange={props.handleMenuChange} />
      </VedasLogo>
    </LogoArea>
  )
}

export default FooterLogoArea