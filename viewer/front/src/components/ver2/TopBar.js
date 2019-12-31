import React from 'react'
import styled from 'styled-components';
import { AppProvider, Select } from '@shopify/polaris';
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

  if (isMobile){
    TopBarArea = styled(TopBarArea)`
      width:420px;
      border-radius: 12px;
      background: #efefef;
      opacity: 0.8;
    `;
    VedasLogoTopBar = styled(VedasLogoTopBar)`
      display: none;
    `;
    MobileDropbtn = styled(MobileDropbtn)`
      padding-top: 30%;
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
      margin-left: 64%;
      padding-left: 0%;
      padding-right: 0%;
      top: 0%;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 12px;
    `;
    MenuItem = styled(MenuItem)`
      display: none;
    `;
    MenuItemDropdownWrapper = styled(MenuItemDropdownWrapper)`
      width: 160px;
      margin-top: 1%;
      padding-top: 0%;
      padding-left: 0%;
      padding-right: 0%;
      display: inline-block;
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
          <AppProvider>
          <Select
            key="id-menu-item-dropdown"
            options={[{value:"jp", label:"japanese"}, {value:"en", label:"english"}]}
            onChange={(value) => handleLangChange(value)}
            value={lang}
          />
          </AppProvider>
        </MenuItemDropdownWrapper>
      </MenuArea>
    </TopBarArea>
  )
}

export default TopBar