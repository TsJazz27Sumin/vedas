import React, { useState, useCallback } from 'react'
import { AppProvider, Frame, TopBar} from '@shopify/polaris';
import JapanEnergyChart from './apps/JapanEnergyChart'

const App = (props) => {

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
        background: '#ffff',
      },
    },
    logo: {
      width: 124,
      topBarSource: process.env.PUBLIC_URL + '/panair-logo.png',
      url: 'https://corp.panair.jp/',
      accessibilityLabel: 'Panair',
    },
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'News', url: "" }],
        },
        {
          items: [{ content: 'About', url: "" }],
        },
        {
          items: [{ content: 'How to use', url: "" }],
        },
        {
          items: [{ content: 'Go to Panair', url: "https://corp.panair.jp/" }],
        },
        {
          items: [{ content: 'Language setting', url: "" }],
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
      <div style={{ height: '50px' }}>
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
      <JapanEnergyChart query_param={props.qs} />
    </div >
  )
}

export default App 
