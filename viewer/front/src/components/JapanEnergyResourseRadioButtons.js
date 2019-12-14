import React from 'react'
import { RadioButton, Stack } from '@shopify/polaris';

const JapanEnergyResourseRadioButtons = props => {

    const dict = props.dict;
    const unit = props.unit;
    const year_and_month = props.year_and_month;
    const lowerTextFieldValue = props.lowerTextFieldValue;
    const upperTextFieldValue = props.upperTextFieldValue;
    const handleTermChange = props.handleTermChange;

    return (
        <Stack>
            <RadioButton
              label={dict.unit_y}
              checked={unit === "y"}
              id="unit_y"
              name="unit"
              onChange={() => handleTermChange("y", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
            />
            <RadioButton
              label={dict.unit_ym}
              id="unit_ym"
              name="unit"
              checked={unit === "ym"}
              onChange={() => handleTermChange("ym", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
            />
            <RadioButton
              label={dict.unit_ymd}
              id="unit_ymd"
              name="unit"
              checked={unit === "ymd"}
              onChange={() => handleTermChange("ymd", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
            />
            <RadioButton
              label={dict.unit_1h}
              id="unit_1h"
              name="unit"
              checked={unit === "1H"}
              onChange={() => handleTermChange("1H", year_and_month[lowerTextFieldValue], year_and_month[upperTextFieldValue])}
            />
        </Stack>
    )
}
export default JapanEnergyResourseRadioButtons