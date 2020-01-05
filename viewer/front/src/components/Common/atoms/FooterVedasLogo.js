import React from 'react'

const FooterVedasLogo = ({handleMenuChange}) => {

  const public_url = process.env.PUBLIC_URL;
  const vedas_logo_image = public_url + '/common/logo/vedas.png';
  
  return (
    <div>
      <img width="100%" src={vedas_logo_image} alt="vedas logo" onClick={() => handleMenuChange('home')}/>
    </div>
  )
}

export default FooterVedasLogo