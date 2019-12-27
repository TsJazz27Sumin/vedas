import React from 'react'
import { RangeSlider, DisplayText, Stack } from '@shopify/polaris';

const RangeSelect = (props) => {

  const range_slider = props.range_slider;
  const unit = props.unit;
  const year_and_month = props.year_and_month;

  return (
    <div>
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
    </div>
  )
}

export default RangeSelect