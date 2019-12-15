import React from 'react'
import { Select, Stack } from '@shopify/polaris';
import dateSelectContentsService from '../services/date_select_contents'

const DateSelect = (props) => {

  const dict = props.dict;
  const year_options = props.year_options;
  const month_options = props.month_options;
  const handleYearSelectChange = props.handleYearSelectChange;
  const handleMonthSelectChange = props.handleMonthSelectChange;
  const handleDateSelectChange = props.handleDateSelectChange;
  const unit = props.unit;
  const yearSelected = props.yearSelected;
  const monthSelected = props.monthSelected;
  const dateSelected = props.dateSelected;

  return (
    <Stack>
      <Select
        key="yearSelect"
        label={dict.unit_y}
        options={year_options}
        onChange={(value) => handleYearSelectChange(unit, value, monthSelected, dateSelected)}
        value={yearSelected}
      />
      <Select
        key="monthSelect"
        label={dict.unit_ym}
        options={month_options}
        onChange={(value) => handleMonthSelectChange(unit, yearSelected, value, dateSelected)}
        value={monthSelected}
      />
      <Select
        key="dateSelect"
        label={dict.unit_ymd}
        options={dateSelectContentsService.get_date_map(yearSelected, monthSelected)}
        onChange={(value) => handleDateSelectChange(unit, yearSelected, monthSelected, value)}
        value={dateSelected}
      />
    </Stack>
  )
}

export default DateSelect