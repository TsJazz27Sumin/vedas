import { useState, useCallback } from 'react';
import japanEnergyService from '../services/japan_energy'
import yearAndMonthService from '../services/year_and_month'

const useElectoricPowerData = () => {

    const year_and_month = yearAndMonthService.get();
    const initialValue = [year_and_month.length - 12, year_and_month.length];
    const [data, setData] = useState([])
    const [unit, setUnit] = useState('ym');
    const handleTermChange = useCallback((newUnit, from, to) => {
        setUnit(newUnit);
        japanEnergyService
            .get(newUnit, from, to)
            .then(initialData => setData(initialData));
    }, []);

    const prefix = '';
    const min = 0;
    const max = year_and_month.length - 1;
    const step = 1;

    const [intermediateTextFieldValue, setIntermediateTextFieldValue] = useState(
        initialValue,
    );
    const [rangeValue, setRangeValue] = useState(initialValue);

    const handleRangeSliderChange = useCallback((value, unit, from, to) => {
        setRangeValue(value);
        setIntermediateTextFieldValue(value);

        const handler = setTimeout(() => {
            japanEnergyService
                .get(unit, from, to)
                .then(initialData => setData(initialData));
        }, 100);

        return () => {
            clearTimeout(handler);
        };
    }, []);

    const lowerTextFieldValue =
        intermediateTextFieldValue[0] === rangeValue[0]
            ? rangeValue[0]
            : intermediateTextFieldValue[0];

    const upperTextFieldValue =
        intermediateTextFieldValue[1] === rangeValue[1]
            ? rangeValue[1]
            : intermediateTextFieldValue[1];

    return { year_and_month, data, unit, handleTermChange, prefix, min, max, step, rangeValue, handleRangeSliderChange, lowerTextFieldValue, upperTextFieldValue }
};

export default { useElectoricPowerData }