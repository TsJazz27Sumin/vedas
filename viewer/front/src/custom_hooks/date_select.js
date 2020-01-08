import { useState, useCallback } from 'react';
import japanEnergyService from '../services/japan_energy'
import dateSelectContentsService from '../services/date_select_contents'

const useDateSelect = (electoric_power_data_initialize_params, setData, setIsLoading) => {

    const initialize = electoric_power_data_initialize_params;
    const dateSelectContents = dateSelectContentsService.get();

    const year_initialize = (
        initialize.year_initialize !== undefined
    ) ? parseInt(initialize.year_initialize) : dateSelectContents.this_year;

    const month_initialize = (
        initialize.month_initialize !== undefined
    ) ? parseInt(initialize.month_initialize) : dateSelectContents.this_month;

    const date_initialize = (
        initialize.date_initialize !== undefined
    ) ? parseInt(initialize.date_initialize) : 1;

    const [dateSelected, setDateSelected] = useState(date_initialize);
    const handleDateSelectChange = useCallback((unit, yearSelected, monthSelected, value) => {
        const date = new Date(parseInt(yearSelected), parseInt(monthSelected - 1), parseInt(value));
        const month = date.getMonth() + 1;

        if (monthSelected !== month) {
            date.setDate(1);
            date.setDate(date.getDate() - 1);
            value = date.getDate();
        }

        setDateSelected(parseInt(value));
        japanEnergyService
            .get_daily_data(unit, yearSelected, monthSelected, value)
            .then(initialData => {
                setData(initialData);
                setIsLoading(false);
            });
    },
        // eslint-disable-next-line
        []);

    const [monthSelected, setMonthSelected] = useState(month_initialize);
    const handleMonthSelectChange = useCallback((unit, yearSelected, value, dateSelected) => {
        const date = new Date(parseInt(yearSelected), parseInt(value - 1), parseInt(dateSelected));
        const month = date.getMonth() + 1;

        let target_date = dateSelected;
        if (parseInt(value) !== month) {
            date.setDate(1);
            date.setDate(date.getDate() - 1);
            setDateSelected(date.getDate());
            target_date = date.getDate();
        }

        setMonthSelected(parseInt(value));
        japanEnergyService
            .get_daily_data(unit, yearSelected, value, target_date)
            .then(initialData => {
                setData(initialData);
                setIsLoading(false);
            });

    },
        // eslint-disable-next-line
        []);
    const month_options = dateSelectContents.month_map;

    const [yearSelected, setYearSelected] = useState(year_initialize);
    const handleYearSelectChange = useCallback((unit, value, monthSelected, dateSelected) => {

        const date = new Date(parseInt(value), parseInt(monthSelected), parseInt(dateSelected));
        const month = date.getMonth() + 1;

        let target_date = dateSelected;
        let target_month = monthSelected;

        if (monthSelected !== month) {
            date.setDate(1);
            date.setDate(date.getDate() - 1);
            setDateSelected(date.getDate());
            target_date = date.getDate();
            target_month = target_month + 1;
        }

        setYearSelected(parseInt(value));
        japanEnergyService
            .get_daily_data(unit, value, target_month, target_date)
            .then(initialData => {
                setData(initialData);
                setIsLoading(false);
            });
    },
        // eslint-disable-next-line
        []);
    const year_options = dateSelectContents.year_map;

    return {
        dateSelected,
        handleDateSelectChange,
        monthSelected,
        handleMonthSelectChange,
        month_options,
        yearSelected,
        handleYearSelectChange,
        year_options,
    };
};

export default { useDateSelect }