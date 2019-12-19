import React, { useState, useCallback } from 'react'
import { AppProvider, Frame, TopBar, Card, Spinner } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import JapanEnergyCharts from './components/JapanEnergyCharts'
import JapanEnergyCheckboxes from './components/JapanEnergyCheckboxes'
import JapanEnergyResourseBadges from './components/JapanEnergyResourseBadges'
import JapanEnergyResourseRadioButtons from './components/JapanEnergyResourseRadioButtons'
import DateSelect from './components/DateSelect'
import RangeSelect from './components/RangeSelect'
import wordDictionaryService from './services/word_dictionary'
import queryParamPerserService from './services/query_param_perser'
import electoricPowerResourseHook from './custom_hooks/electoric_power_resourse'
import electoricPowerCompanyHook from './custom_hooks/electoric_power_company'
import dateSelectHook from './custom_hooks/date_select'
import rangeSliderHook from './custom_hooks/electoric_power_data'

//memo:
//cd ../supply-and-demand-viewer/viewer/front/
//npm start
//reference:https://polaris.shopify.com/components/
const App = (props) => {

  //クエリパラメータ
  const qs = queryParamPerserService.execute(props.qs);
  const language_initialize = qs.language_initialize;
  const electoric_power_data_initialize_params = qs.electoric_power_data_initialize_params;
  const energy_power_company_initialize_params = qs.energy_power_company_initialize_params;
  const electoric_power_resourse_initialize_params = qs.electoric_power_resourse_initialize_params;

  //電力データをCallするためのパラメータや処理
  const electoric_power_data_hook = rangeSliderHook.useElectoricPowerData(electoric_power_data_initialize_params)
  const is_loading = electoric_power_data_hook.is_loading;
  const year_and_month = electoric_power_data_hook.year_and_month;
  const data = electoric_power_data_hook.data;
  const unit = electoric_power_data_hook.unit;
  const handleTermChange = electoric_power_data_hook.handleTermChange;
  const range_slider = electoric_power_data_hook.range_slider;
  const is_range_slider_open = electoric_power_data_hook.is_range_slider_open;
  const setData = electoric_power_data_hook.setData;
  const setIsLoading = electoric_power_data_hook.setIsLoading;

  //言語選択
  let dict = wordDictionaryService.get(language_initialize);

  //30分値指定の期間
  const date_select = dateSelectHook.useDateSelect(electoric_power_data_initialize_params, setData, setIsLoading);

  //電力会社のチェックボックス
  const electoric_power_company = electoricPowerCompanyHook.useElectoricPowerCompany(energy_power_company_initialize_params);
  const allChecked = electoric_power_company.allChecked;
  const handleAllChange = electoric_power_company.handleAllChange;
  const electricPowersChecked = electoric_power_company.Checked;
  const handleElectricPowersChange = electoric_power_company.handleValueChange;

  //エネルギーリソースのチェックボックス
  const electoric_power_resource = electoricPowerResourseHook.useElectoricPowerResourse(electoric_power_resourse_initialize_params);
  const energyResoursesChecked = electoric_power_resource.Checked;
  const handleEnergyResoursesChange = electoric_power_resource.handleValueChange;

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
          items: [{ content: 'News' }],
        },
        {
          items: [{ content: 'About' }],
        },
        {
          items: [{ content: 'How to use' }],
        },
        {
          items: [{ content: 'Go to Panair' }],
        },
        {
          items: [{ content: 'Language setting' }],
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
      <AppProvider>
        <Card sectioned>
          <Card.Section>
            <JapanEnergyResourseRadioButtons
              dict={dict}
              unit={unit}
              year_and_month={year_and_month}
              lowerTextFieldValue={range_slider.lowerTextFieldValue}
              upperTextFieldValue={range_slider.upperTextFieldValue}
              handleTermChange={handleTermChange}
            />
          </Card.Section>
          <Card.Section>
            <JapanEnergyCheckboxes
              dict={dict}
              allChecked={allChecked}
              handleAllChange={handleAllChange}
              electricPowersChecked={electricPowersChecked}
              handleElectricPowersChange={handleElectricPowersChange}
            />
          </Card.Section>
          <Card.Section>
            <JapanEnergyResourseBadges
              dict={dict}
              energyResoursesChecked={energyResoursesChecked}
              handleEnergyResoursesChange={handleEnergyResoursesChange}
            />
          </Card.Section>
          {
            is_range_slider_open ?
              (<Card.Section>
                <RangeSelect
                  range_slider={range_slider}
                  unit={unit}
                  year_and_month={year_and_month}
                />
              </Card.Section>) : (
                <Card.Section>
                  <DateSelect
                    dict={dict}
                    unit={unit}
                    date_select={date_select}
                  />
                </Card.Section>
              )
          }
        </Card>
      </AppProvider>
      <AppProvider>
        {
          is_loading ?
            (
              <ul>
                <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
              </ul>
            )
            :
            (<ul>
              <JapanEnergyCharts
                data={data}
                dict={dict}
                electricPowersChecked={electricPowersChecked}
                energyResoursesChecked={energyResoursesChecked}
              />
            </ul>
            )
        }
        <Card title={dict.watchout} sectioned>
          <p>{dict.watchout_info1}</p>
          <p>{dict.watchout_info2}</p>
          <br />
          <p>{dict.watchout_info3}</p>
          <p>{dict.watchout_info4}</p>
          <p>{dict.watchout_info5}</p>
        </Card>
      </AppProvider>
    </div >
  )
}

export default App 
