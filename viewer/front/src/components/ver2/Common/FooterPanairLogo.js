import React from 'react'

const FooterPanairLogo = () => {

  const public_url = process.env.PUBLIC_URL;
  const panair_logo_image = public_url + '/panair-logo_big.png';
  
  return (
    <div>
      <a href="https://corp.panair.jp/" target="_blank" rel="noopener noreferrer"><img width="100%" src={panair_logo_image} alt="panair logo"/></a>
    </div>
  )
}

export default FooterPanairLogo