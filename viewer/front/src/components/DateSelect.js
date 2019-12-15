import React from 'react'
import { Select, Stack } from '@shopify/polaris';
import dateSelectContentsService from '../services/date_select_contents'

const DateSelect = (props) => {

  const dict = props.dict;
  const unit = props.unit;
  const year_options = props.date_select.year_options;
  const month_options = props.date_select.month_options;
  const handleYearSelectChange = props.date_select.handleYearSelectChange;
  const handleMonthSelectChange = props.date_select.handleMonthSelectChange;
  const handleDateSelectChange = props.date_select.handleDateSelectChange;
  const yearSelected = props.date_select.yearSelected;
  const monthSelected = props.date_select.monthSelected;
  const dateSelected = props.date_select.dateSelected;

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