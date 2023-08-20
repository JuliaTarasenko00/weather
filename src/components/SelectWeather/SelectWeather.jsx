import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { weatherFetch, weatherFetchWeek } from 'redux/options';
import css from './SelextWeather.module.css';

const SelectWeather = () => {
  const [city, setCity] = useState('Odessa');
  const dispatch = useDispatch();

  const changeCityName = ev => {
    ev.preventDefault();
    const form = ev.target;
    const name = form.elements.city.value;

    setCity(name);
    form.reset();
  };

  useEffect(() => {
    if (!city) return;
    dispatch(weatherFetch(city));
    dispatch(weatherFetchWeek(city));
  }, [dispatch, city]);

  return (
    <>
      <form onSubmit={changeCityName} className={css.select_form}>
        <input type="text" name="city" required className={css.search_city} />
        <button type="submit" className={css.btn}>
          🔍
        </button>
      </form>
    </>
  );
};

export default SelectWeather;
