import React from 'react'
import FooterVedasLogo from '../../../components/ver2/FooterVedasLogo'
import FooterPanairLogo from '../../../components/ver2/FooterPanairLogo'

const EnergyCharts = (props) => {

  const handleMenuChange = props.handleMenuChange;

  return (
    <div className="analyze-area">
      <div className="content">
          <p>contact</p>
        </div>
        <div className="logo-area">
          <div className="contact-vedas-logo">
            <FooterVedasLogo handleMenuChange={handleMenuChange}/>
          </div>
          <div className="panair-vedas-logo">
            <FooterPanairLogo/>
          </div>
        </div>
    </div>
  )
}

export default EnergyCharts