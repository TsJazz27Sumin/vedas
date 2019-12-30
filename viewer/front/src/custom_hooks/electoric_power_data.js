import { useState, useCallback, useEffect } from 'react';
import { debounce } from "lodash";
import japanEnergyService from '../services/japan_energy'
import yearAndMonthService from '../services/year_and_month'

const useElectoricPowerData = (electoric_power_data_initialize_params) => {

    const initialize = electoric_power_data_initialize_params;

    const [is_range_slider_open, setIsRangeSliderOpen] = useState(initialize.is_range_slider_open);
    const [is_loading, setIsLoading] = useState(false);
    const year_and_month = yearAndMonthService.get();
    const [data, setData] = useState([]);
    const [unit, setUnit] = useState(initialize.unit_initialize);

    const japanStandardTime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });
    const today = new Date(japanStandardTime);
    const year_initialize = (
        initialize.year_initialize !== undefined
    ) ? parseInt(initialize.year_initialize) : today.getFullYear();
    const month_initialize = (
        initialize.month_initialize !== undefined
    ) ? parseInt(initialize.month_initialize) : today.getMonth();
    const date_initialize = (
        initialize.date_initialize !== undefined
    ) ? parseInt(initialize.date_initialize) : 1;

    const range_from_value_initialize = (
        initialize.range_from_value_initialize !== undefined
    ) ? parseInt(initialize.range_from_value_initialize) : (year_and_month.length - 12);

    const range_to_value_initialize = (
        initialize.range_to_value_initialize !== undefined
    ) ? parseInt(initialize.range_to_value_initialize) : (year_and_month.length - 3);

    //任意のパラメータの場合、イベントを初回発火させる必要がある。
    useEffect(() => {
        if (unit === "1H") {
            japanEnergyService
                .get_daily_data(unit, year_initialize, month_initialize, date_initialize)
                .then(initialData => {
                    setData(initialData);
                    setIsLoading(false);
                });
        }
        if (unit === "y" || unit === "ym" || unit === "ymd") {
            japanEnergyService
                .get(unit, year_and_month[range_from_value_initialize], year_and_month[range_to_value_initialize])
                .then(initialData => {
                    setData(initialData);
                    setIsLoading(false);
                });
        }
    },
        // eslint-disable-next-line
        []);

    const handleTermChange = useCallback((newUnit, from, to) => {
        setUnit(newUnit);

        if (newUnit === "y" || newUnit === "ym" || newUnit === "ymd") {
            setIsRangeSliderOpen(true);
            setIsLoading(true);
            japanEnergyService
                .get(newUnit, from, to)
                .then(initialData => {
                    setData(initialData);
                    setIsLoading(false);
                });
        } else if (newUnit === "1H") {
            setIsRangeSliderOpen(false);

            japanEnergyService
                .get_daily_data(newUnit, year_initialize, month_initialize, date_initialize)
                .then(initialData => {
                    setData(initialData);
                    setIsLoading(false);
                });
        }
    },
        // eslint-disable-next-line
        []);

    const prefix = '';
    const min = 0;
    const max = year_and_month.length - 1;
    const step = 1;
    
    const initialValue = [range_from_value_initialize, range_to_value_initialize];
    const [intermediateTextFieldValue, setIntermediateTextFieldValue] = useState(
        initialValue,
    );
    const [rangeValue, setRangeValue] = useState(initialValue);

    const debouncedHandleChange = debounce(
        (unit, from, to) => {
            setIsLoading(true);
            if (unit === "y" || unit === "ym" || unit === "ymd") {
                japanEnergyService
                    .get(unit, from, to)
                    .then(initialData => {
                        setData(initialData);
                        setIsLoading(false);
                    });
            }
        },
        500
    );

    const handleRangeSliderChange = useCallback((value, unit, from, to) => {
        setRangeValue(value);
        setIntermediateTextFieldValue(value);
        debouncedHandleChange(unit, from, to);
        // eslint-disable-next-line
    }, []);

    const lowerTextFieldValue =
        intermediateTextFieldValue[0] === rangeValue[0]
            ? rangeValue[0]
            : intermediateTextFieldValue[0];

    const upperTextFieldValue =
        intermediateTextFieldValue[1] === rangeValue[1]
            ? rangeValue[1]
            : intermediateTextFieldValue[1];

    return {
        is_loading,
        year_and_month,
        data,
        unit,
        handleTermChange,
        range_slider : {
            prefix : prefix,
            min : min,
            max : max,
            step : step,
            rangeValue : rangeValue,
            handleRangeSliderChange : handleRangeSliderChange,
            lowerTextFieldValue : lowerTextFieldValue,
            upperTextFieldValue : upperTextFieldValue,
        },
        is_range_slider_open,
        setData,
        setIsLoading
    }
};

export default { useElectoricPowerData }