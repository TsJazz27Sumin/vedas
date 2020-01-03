import React from 'react'
import styled from 'styled-components';
import { AppProvider, Select } from '@shopify/polaris';
import { isMobile } from "react-device-detect";
import WindowSizeService from '../../../services/window_size'

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const TopBar = (props) => {

  const lang = props.lang;
  const menu = props.menu;
  const handleMenuChange = props.handleMenuChange;
  const handleLangChange = props.handleLangChange;
  const public_url = process.env.PUBLIC_URL;
  const vedas_logo_top_bar_image = public_url + '/vedas_v1.png';

  let TopBarArea = styled.div`
  width: 1440px;

  position: fixed;
  top: 0;
  left: 0;
  
  z-index: 999;
  `;

  let VedasLogoTopBar = styled.div`
  width: 245px;

  padding-top: 1.5%;
  padding-left: 3%;
  padding-bottom: 3%;
  `;
  
  let MobileDropdown = styled.div`
  display: none;
  `;

  let MenuArea = styled.div`
  border: 1px solid #fff;
  border-radius: 12px;

  background: #efefef;

  height: 56%;
  width: 53%;

  margin-left: 45%;
  padding-left: 3%;
  padding-right: 2%;

  top: 17%;

  position: absolute;
  
  box-sizing: border-box;
  `;

  let MenuItem = styled.div`
  font-family: Roboto;
  font-size: 140%;
  color: #4e4e4e;

  padding-left: 3%;
  padding-right: 3%;

  vertical-align: middle;
  letter-spacing: 0.03em;

  display: inline-block;

  cursor: pointer;
  `;
  
  let MenuItemDropdownWrapper = styled.div`
  width: 28%;
  
  padding-top: 2.5%;
  padding-left: 7%;
  padding-right: 2%;
  
  display: inline-block;
    `;

  if (isMobile) {
    TopBarArea = styled(TopBarArea)`
    border-radius: 12px;

    background: #efefef;

    height: 8%;
    width:${WindowSizeService.getWindowWidthSize() + 60}px;

    opacity: 0.7;
    `;

    VedasLogoTopBar = styled(VedasLogoTopBar)`
    display: none;
    `;

    MobileDropdown = styled(MobileDropdown)`
    margin: 1%;
    
    position: relative;
    
    display: inline-block;
    `;

    MenuArea = styled(MenuArea)`
    border: 1px solid #fff;
    border-radius: 12px;

    height: 0%;
    width: 100%;

    padding-left: 0%;
    padding-right: 0%;
    margin-left: 0%;
    margin-right: 10%;

    position: absolute;
    top: 0%;

    box-sizing: border-box;
    `;

    MenuItem = styled(MenuItem)`
    display: none;
    `;

    MenuItemDropdownWrapper = styled(MenuItemDropdownWrapper)`
    width: 160px;
    
    margin-top: 1%;
    margin-right: 25%;
    padding-top: 0%;
    padding-left: 0%;
    padding-right: 0%;
    
    display: inline-block;
    `;
  }

  return (
    <TopBarArea>
      <VedasLogoTopBar>
        <a href={baseUrl + '?lang=' + lang}><img width="100%" src={vedas_logo_top_bar_image} alt="top bar logo" /></a>
      </VedasLogoTopBar>
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
              key="id-lang-item-dropdown"
              options={[
                { value: "jp", label: "japanese" }, 
                { value: "en", label: "english" }, 
                { value: "ch", label: "china" }
              ]}
              onChange={(value) => handleLangChange(value)}
              value={lang}
            />
          </AppProvider>
        </MenuItemDropdownWrapper>
              <MobileDropdown>
        <AppProvider>
          <Select
            key="id-menu-item-dropdown"
            options={[
              { value: "home", label: "home" }, 
              { value: "usage", label: "usage" }, 
              { value: "about", label: "about" },
              { value: "news", label: "news" },
              { value: "contact", label: "contact" },
            ]}
            onChange={(value) => handleMenuChange(value)}
            value={menu}
          />
        </AppProvider>
      </MobileDropdown>
      </MenuArea>
    </TopBarArea>
  )
}

export default TopBar