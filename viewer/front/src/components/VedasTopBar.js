import React, { useState, useCallback } from 'react'
import { AppProvider, Frame, TopBar} from '@shopify/polaris';import {
  PopularMajorMonotone,
  NotificationMajorMonotone,
  HeartMajorMonotone,
  HintMajorMonotone,
  SmileyJoyMajorMonotone,
  SettingsMajorMonotone,
  FavoriteMajorMonotone
} from '@shopify/polaris-icons';

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const VedasTopBar = (props) => {

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );

  const handleNavigationToggle = useCallback(() => {
    console.log('toggle navigation visibility');
  }, []);

  const theme = {
    colors: {
      topBar: {
        //background: '#fff',
      },
    },
    logo: {
      width: 124,
      topBarSource: process.env.PUBLIC_URL + '/vedas_v1.png',
      url: 'https://corp.panair.jp/',
      accessibilityLabel: 'Vedas',
    },
  };

  const lang = props.lang === undefined ? "jp" : props.lang;

  const home_url = baseUrl + lang + '/home/';
  const news_url = baseUrl + lang + '/news/';
  const about_url = baseUrl + lang + '/about/';
  const howtouse_url = baseUrl + lang + '/howtouse/';
  const contact_url = baseUrl + lang + '/contact/';
  const language_setting_url = baseUrl + lang + '/language_setting/';

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Home', url: home_url, icon: PopularMajorMonotone }],
        },
        {
          items: [{ content: 'News', url: news_url, icon: NotificationMajorMonotone }],
        },
        {
          items: [{ content: 'About', url: about_url, icon: HeartMajorMonotone }],
        },
        {
          items: [{ content: 'How To Use', url: howtouse_url, icon: HintMajorMonotone }],
        },
        {
          items: [{ content: 'Contact', url: contact_url, icon: SmileyJoyMajorMonotone }],
        },
        {
          items: [{ content: 'Language Setting', url: language_setting_url, icon: SettingsMajorMonotone }],
        },
        {
          items: [{ content: 'Go to Panair HomePage', url: "https://corp.panair.jp/", icon: FavoriteMajorMonotone }],
        }
      ]}
      name="Menu"
      detail="touch me"
      initials="M"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={handleNavigationToggle}
    />
  );
  
  return (
    <div>
      <div style={{ height: '80px' }}>
        <AppProvider
          theme={theme}
          i18n={{
            Polaris: {
              Avatar: {
                label: 'Avatar',
                labelWithInitials: 'Avatar with initials {initials}',
              },
              Frame: { skipToContent: 'Skip to content' },
              TopBar: {
                toggleMenuLabel: 'Toggle menu',
              },
            },
          }}
        >
          <Frame topBar={topBarMarkup} />
        </AppProvider>
      </div>
    </div >
  )
}

export default VedasTopBar