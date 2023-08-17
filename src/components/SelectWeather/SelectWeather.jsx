import React from 'react';
import Select from 'react-select';

const city = [
  { value: 'city-1', label: 'Odessa' },
  { value: 'city-2', label: 'Kyiv' },
  { value: 'city-3', label: 'Parish' },
];

const colourStyles = {
  control: styles => ({
    ...styles,
    border: 'none',
    borderRadius: 10,
    backgroundColor: 'rgba(71, 147, 255, 0.2)',
    width: 194,
    height: 37,
  }),
};

const SelectWeather = () => (
  <Select options={city} styles={colourStyles} defaultValue={city[0]} />
);

export default SelectWeather;
