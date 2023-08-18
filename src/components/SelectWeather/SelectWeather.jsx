import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { weatherFetch } from 'redux/options';

const SelectWeather = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.weather.error);

  const changeCityName = ev => {
    ev.preventDefault();
    const form = ev.target;
    const name = form.elements.city.value;

    setCity(name);
    form.reset();
  };

  useEffect(() => {
    if (!city) return;

    if (error) {
      toast.error(`${city} city not found, please check and try again.`);
      return;
    }
    dispatch(weatherFetch(city));
  }, [dispatch, city, error]);

  return (
    <>
      <form onSubmit={changeCityName}>
        <input type="text" name="city" required />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default SelectWeather;
