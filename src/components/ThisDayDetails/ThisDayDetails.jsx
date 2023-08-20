import css from './ThisDayDetails.module.css';
import weather from '../../assets/images/weather.png';
import { IndicatorSvgSelector } from 'assets/icons/indicator/Indicator';
import { useSelector } from 'react-redux';

const ThisDayDetails = () => {
  const dayWeather = useSelector(state => state.weather.weather);

  return (
    <section className={css.day_details}>
      <img src={weather} alt="weather today" className={css.day_details_img} />
      <ul className={css.day_details_list}>
        <li className={css.day_details_item}>
          <div className={css.day_details_indic}>
            <IndicatorSvgSelector id={'temp'} />
          </div>
          <p className={css.day_details_title}>Temperature</p>
          <p className={css.day_details_text}>
            {Math.round(dayWeather.main.temp)}° feels like
            {Math.round(dayWeather.main.feels_like)}°
          </p>
        </li>
        <li className={css.day_details_item}>
          <div className={css.day_details_indic}>
            <IndicatorSvgSelector id={'pressure'} />
          </div>
          <p className={css.day_details_title}>Pressure</p>
          <p className={css.day_details_text}>
            {dayWeather.main.pressure} mmHg
          </p>
        </li>
        <li className={css.day_details_item}>
          <div className={css.day_details_indic}>
            <IndicatorSvgSelector id={'precipitation'} />
          </div>
          <p className={css.day_details_title}>Precipitation</p>
          <p className={css.day_details_text}>{dayWeather.main.humidity}%</p>
        </li>
        <li className={css.day_details_item}>
          <div className={css.day_details_indic}>
            <IndicatorSvgSelector id={'wind'} />
          </div>
          <p className={css.day_details_title}>Wind</p>
          <p className={css.day_details_text}>{dayWeather.wind.speed} m/s</p>
        </li>
      </ul>
    </section>
  );
};

export default ThisDayDetails;
