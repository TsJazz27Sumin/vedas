import React from '../../../node_modules/react'
import { AppProvider, RangeSlider, DisplayText, Stack } from '../../../node_modules/@shopify/polaris';

const RangeSelect = (props) => {

  const range_slider = props.range_slider;
  const unit = props.unit;
  const year_and_month = props.year_and_month;

  return (
    <div>
      <AppProvider>
        <RangeSlider
          value={range_slider.rangeValue}
          prefix={range_slider.prefix}
          min={range_slider.min}
          max={range_slider.max}
          step={range_slider.step}
          onChange={(value) => range_slider.handleRangeSliderChange(value, unit, year_and_month[value[0]], year_and_month[value[1]])}
        />
        <Stack distribution="equalSpacing" spacing="extraLoose">
          <DisplayText size="small">{year_and_month[range_slider.lowerTextFieldValue]}</DisplayText>
          <DisplayText size="small">{year_and_month[range_slider.upperTextFieldValue]}</DisplayText>
        </Stack>
      </AppProvider>
    </div>
  )
}

export default RangeSelect