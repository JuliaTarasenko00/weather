import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import css from './ThisDay.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ThisDay = () => {
  const dayWeather = useSelector(state => state.weather.weather);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = time.getHours();

  const minutes = time.getMinutes();
  const formatTime = value => (value < 10 ? `0${value}` : value);

  return (
    <section className={css.this_day}>
      <div className={css.this_day_wrapper}>
        <div className={css.this_day_info}>
          <p className={css.this_day_temperature}>
            {Math.round(dayWeather.main?.temp)}°
          </p>
          <h2 className={css.this_day_title}>Today</h2>
        </div>
        <div className={css.this_day_svg}>
          <GlobalSvgSelector
            id={dayWeather.weather?.map(el => el.main).join('')}
          />
        </div>
      </div>
      <ul className={css.this_day_list}>
        <li className={css.this_day_item}>
          Time: {formatTime(hours)}:{formatTime(minutes)}
        </li>
        <li className={css.this_day_item}>City: {dayWeather?.name}</li>
      </ul>
    </section>
  );
};

export default ThisDay;
