import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const TopBar = (props) => {

  const lang = props.lang;
  const handleMenuChange = props.handleMenuChange;
  const handleLangChange = props.handleLangChange;
  const public_url = process.env.PUBLIC_URL;
  const vedas_logo_top_bar_image = public_url + '/vedas_v1.png';

  let TopBarArea = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 1440px;
    z-index: 999;
  `;

  let VedasLogoTopBar = styled.div``;
  let MobileDropbtn = styled.button``;
  let MobileDropdown = styled.div``;
  let MobileDropdownContent = styled.div``;
  let MobileDropdownP = styled.p``;
  let MenuArea = styled.div``;
  let MenuItem = styled.div``;
  let MenuItemDropdownWrapper = styled.div``;
  let MenuItemDropdown = styled.div``;
  let MenuItemDropdownSelect = styled.select``;

  if (isMobile){
    TopBarArea = styled(TopBarArea)`
      width:100%;
    `;
    VedasLogoTopBar = styled(VedasLogoTopBar)`
      display: none;
    `;
    MobileDropbtn = styled(MobileDropbtn)`
      padding-top: 20%;
      padding-bottom: 20%;
      padding-right: 30%;
      padding-left: 30%;
      border: none;
      border-radius: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 110%;
      background: #fff;
      border: 2px solid #efefef;
    `;
    MobileDropdown = styled(MobileDropdown)`
      margin: 1%;
      position: relative;
      display: inline-block;
    `;
    MobileDropdownContent = styled(MobileDropdownContent)`
      display: none;
      position: absolute;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: 12px;
      background: #fff;
    `;
    MobileDropdownP = styled(MobileDropdownP)`
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 110%;
      cursor: pointer;
    `;
    MenuArea = styled(MenuArea)`
      position: absolute;
      width: 47%;
      margin-left: 53%;
      padding-left: 0%;
      padding-right: 9%;
      top: 0%;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 12px;
    `;
    MenuItem = styled(MenuItem)`
      display: none;
    `;
    MenuItemDropdownWrapper = styled(MenuItemDropdownWrapper)`
      width: 100%;
      padding-top: 2.5%;
      padding-left: 18%;
      padding-right: 3%;
      display: inline-block;
    `;
    MenuItemDropdown = styled(MenuItemDropdown)`
      display: inline-block;
      width: 130%;
      vertical-align: middle;
      position: relative;
      border: 2px solid #efefef;
      border-radius: 10px;
      color: #4E4E4E;
      -webkit-appearance: none;
      background: #fff;
    `;
    MenuItemDropdownSelect = styled(MenuItemDropdownSelect)`
      position: relative;
      border: 2px solid #fff;
      border-radius: 10px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 110%;
      color: #4E4E4E;
      -webkit-appearance: none;
      padding: 5% 10% 5% 15%;
      background: #fff;
      cursor: pointer;
    `;
  } else {
    VedasLogoTopBar = styled(VedasLogoTopBar)`
      padding-top: 1.5%;
      padding-left: 3%;
      padding-right: 83%;
      padding-bottom: 3%;
      cursor: pointer;
    `;
    MobileDropbtn = styled(MobileDropbtn)`
      display: none;
    `;
    MobileDropdown = styled(MobileDropdown)`
      display: none;
    `;
    MobileDropdownContent = styled(MobileDropdownContent)`
      display: none;
    `;
    MobileDropdownP = styled(MobileDropdownP)`
      display: none;
    `;
    MenuArea = styled(MenuArea)`
      position: absolute;
      width: 53%;
      margin-left: 45%;
      padding-left: 3%;
      padding-right: 2%;
      height: 56%;
      top: 17%;

      background: #EFEFEF;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 12px;
    `;
    MenuItem = styled(MenuItem)`
      padding-left: 3%;
      padding-right: 3%;
      display: inline-block;
      vertical-align: middle;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 140%;
      letter-spacing: 0.03em;
      cursor: pointer;
      color: #4E4E4E;
    `;
    MenuItemDropdownWrapper = styled(MenuItemDropdownWrapper)`
      width: 28%;
      padding-top: 2.5%;
      padding-left: 7%;
      padding-right: 2%;
      display: inline-block;
    `;
    MenuItemDropdown = styled(MenuItemDropdown)`
      display: inline-block;
      width: 130%;
      vertical-align: middle;
      position: relative;
      border: 2px solid #fff;
      border-radius: 10px;
      color: #4E4E4E;
      -webkit-appearance: none;
      background: #fff;
    `;
    MenuItemDropdownSelect = styled(MenuItemDropdownSelect)`
      position: relative;
      border: 2px solid #fff;
      border-radius: 10px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 110%;
      color: #4E4E4E;
      -webkit-appearance: none;
      padding: 5% 10% 5% 15%;
      background: #fff;
      cursor: pointer;
    `;
  }

  const toggle_mobile_menu = () => {
    let element = document.getElementById('id-mobile-dropdown-content');
    element.classList.toggle("display-block");
  };
  
  return (
    <TopBarArea>
      <VedasLogoTopBar>
        <a href={baseUrl + '?lang=' + lang}><img width="100%" src={vedas_logo_top_bar_image} alt="top bar logo"/></a>
      </VedasLogoTopBar>
      <MobileDropdown>
        <MobileDropbtn onClick={() => toggle_mobile_menu()} >Menu</MobileDropbtn>
        <MobileDropdownContent id="id-mobile-dropdown-content">
          <MobileDropdownP onTouchStart={() => handleMenuChange('home')}>Home</MobileDropdownP>
          <MobileDropdownP onTouchStart={() => handleMenuChange('usage')}>Usage</MobileDropdownP>
          <MobileDropdownP onTouchStart={() => handleMenuChange('about')}>About</MobileDropdownP>
          <MobileDropdownP onTouchStart={() => handleMenuChange('news')}>News</MobileDropdownP>
          <MobileDropdownP onTouchStart={() => handleMenuChange('contact')}>Contact</MobileDropdownP>
        </MobileDropdownContent>
      </MobileDropdown>
      <MenuArea>
        <MenuItem>
          <p onClick={() => handleMenuChange('usage')}>Usage</p>
        </MenuItem>
        <MenuItem>
          <p onClick={() => handleMenuChange('about')}>About</p>
        </MenuItem>
        <MenuItem>
          <p onClick={() => handleMenuChange('news')}>News</p>
        </MenuItem>
        <MenuItem>
          <p onClick={() => handleMenuChange('contact')}>Contact</p>
        </MenuItem>
        <MenuItemDropdownWrapper>
          <MenuItemDropdown>
            <MenuItemDropdownSelect 
              id="id-menu-item-dropdown"
              name="language" 
              onChange={(event) => handleLangChange(event.target.value)}
              value={lang}
            >
              <option value="jp">japanese</option>
              <option value="en">english</option>
            </MenuItemDropdownSelect>
            <svg width="20" height="20" viewBox="0 -4 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MenuItemDropdown>
        </MenuItemDropdownWrapper>
      </MenuArea>
    </TopBarArea>
  )
}

export default TopBar