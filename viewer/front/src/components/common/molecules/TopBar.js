import React from 'react'
import styled from 'styled-components';
import { AppProvider, Select } from '@shopify/polaris';
import { isMobile } from "react-device-detect";
import WindowSizeService from 'services/window_size'
import Color from 'services/color';

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const TopBar = (props) => {

  const lang = props.lang;
  const menu = props.menu;
  const handleMenuChange = props.handleMenuChange;
  const handleLangChange = props.handleLangChange;
  const public_url = process.env.PUBLIC_URL;
  const vedas_logo_top_bar_image = public_url + '/common/logo/vedas.png';

  const StyledComponents = getStyledComponents();
  const TopBarArea = StyledComponents.TopBarArea;
  const VedasLogoTopBar = StyledComponents.VedasLogoTopBar;
  const MobileDropdown = StyledComponents.MobileDropdown;
  const MenuArea = StyledComponents.MenuArea;
  const MenuItem = StyledComponents.MenuItem;
  const MenuItemDropdownWrapper = StyledComponents.MenuItemDropdownWrapper;
  
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
        <MenuItemDropdownWrapper>
          <AppProvider>
            <Select
              key="id-lang-item-dropdown"
              options={[
                { value: "jp", label: "Japanese" },
                { value: "en", label: "English" },
                { value: "ch", label: "China" }
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

const getStyledComponents = () => {

  let TopBarArea = styled.div`
  height: auto;
  width: 1440px;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  
  z-index: 999;
  `;

  let VedasLogoTopBar = styled.div`
  height: auto;
  width: 245px;

  padding: 1.5% 0% 0% 3%;
  margin:  0% 0% 2% 0%;
  `;

  let MobileDropdown = styled.div`
  display: none;
  `;

  let MenuArea = styled.div`
  border: 1px solid ${Color.white};
  border-radius: 12px;

  background: ${Color.gray};

  height: 83%;
  width: 53%;

  padding: 0% 0% 0% 4%;
  margin:  0% 0% 0% 45%;

  position: absolute;
  top: 17%;
  right: 0%;
  left: 0%;
  bottom: 0%;
  `;

  let MenuItem = styled.div`
  font-family: Roboto;
  font-size: 20px;
  color: ${Color.lightGray};

  padding: 4.8% 6% 4% 6%;
  margin:  0% 0% 0% 0%;

  letter-spacing: 0.03em;

  display: inline-block;

  cursor: pointer;
  `;

  let MenuItemDropdownWrapper = styled.div`
  height: auto;
  width: 28%;

  padding: 2.5% 2% 2% 2%;
  margin:  0% 0% 0% 6%;
  
  display: inline-block;
    `;

  if (isMobile) {
    TopBarArea = styled(TopBarArea)`
    border-radius: 12px;

    height: 8%;
    width:${WindowSizeService.getWindowWidthSize()}px;

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

    padding: 0% 0% 0% 0%;
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
    width:${WindowSizeService.getWindowWidthSize() - 255}px;
    
    padding: 0% 0% 0% 0%;
    margin: 1% 25% 0% 0%;
    
    display: inline-block;
    `;
  }

  return {
    TopBarArea : TopBarArea, 
    VedasLogoTopBar : VedasLogoTopBar,
    MobileDropdown : MobileDropdown,
    MenuArea : MenuArea,
    MenuItem : MenuItem,
    MenuItemDropdownWrapper : MenuItemDropdownWrapper
  };
}

export default TopBar