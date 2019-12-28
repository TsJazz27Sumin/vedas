import React from 'react'

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const TopBar = (props) => {

  const lang = props.lang;
  const handleMenuChange = props.handleMenuChange;
  const handleLangChange = props.handleLangChange;
  const public_url = process.env.PUBLIC_URL;
  const vedas_logo_top_bar_image = public_url + '/vedas_v1.png';

  const toggle_mobile_menu = () => {
    let element = document.getElementById('id-mobile-dropdown-content');
    element.classList.toggle("mobile-dropdown-content-open");
  };
  
  return (
    <div className="top-bar-area">
      <div className="vedas-logo-top-bar">
        <a href={baseUrl + '?lang=' + lang}><img width="100%" src={vedas_logo_top_bar_image} alt="top bar logo"/></a>
      </div>
      <div className="mobile-dropdown">
        <button onClick={() => toggle_mobile_menu()} className="mobile-dropbtn" >Menu</button>
        <div id="id-mobile-dropdown-content" className="mobile-dropdown-content">
          <p onTouchStart={() => handleMenuChange('home')}>Home</p>
          <p onTouchStart={() => handleMenuChange('usage')}>Usage</p>
          <p onTouchStart={() => handleMenuChange('about')}>About</p>
          <p onTouchStart={() => handleMenuChange('news')}>News</p>
          <p onTouchStart={() => handleMenuChange('contact')}>Contact</p>
        </div>
      </div>
      <div className="menu-area">
        <div className="menu-item">
          <p onClick={() => handleMenuChange('usage')}>Usage</p>
        </div>
        <div className="menu-item">
          <p onClick={() => handleMenuChange('about')}>About</p>
        </div>
        <div className="menu-item">
          <p onClick={() => handleMenuChange('news')}>News</p>
        </div>
        <div className="menu-item">
          <p onClick={() => handleMenuChange('contact')}>Contact</p>
        </div>
        <div className="menu-item-dropdown-wrapper">
          <div className="menu-item-dropdown">
            <select 
              id="id-menu-item-dropdown" 
              className="menu-item-dropdown-inner" 
              name="language" 
              onChange={(event) => handleLangChange(event.target.value)}
              value={lang}
            >
              <option value="jp">japanese</option>
              <option value="en">english</option>
            </select>
            <svg width="20" height="20" viewBox="0 -4 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar