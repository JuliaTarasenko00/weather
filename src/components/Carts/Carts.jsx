import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import css from './Carts.module.css';

const Carts = () => {
  const items = [
    {
      day: 'Today',
      number: '16 aug',
      weather: 'cloudy',
      degrees: '+18°',
      lowerDegree: '+15°',
      info: 'Cloudy',
    },
    {
      day: 'Tomorrow',
      number: '17 aug',
      weather: 'rain',
      degrees: '+18°',
      lowerDegree: '+15°',
      info: 'A little rain',
    },
    {
      day: 'Thu',
      number: '18 aug',
      weather: 'little-rain',
      degrees: '+26°',
      lowerDegree: '+25°',
      info: 'Little rain',
    },
    {
      day: 'Fri',
      number: '19 aug',
      weather: 'sun',
      degrees: '+30°',
      lowerDegree: '+32°',
      info: 'Sunny',
    },
    {
      day: 'Sat',
      number: '20 aug',
      weather: 'little-rain',
      degrees: '+21°',
      lowerDegree: '+18°',
      info: 'Little rain',
    },
    {
      day: 'Sun',
      number: '21 aug',
      weather: 'cloudy',
      degrees: '+18°',
      lowerDegree: '+15°',
      info: 'Cloudy',
    },
    {
      day: 'Mon',
      number: '22 aug',
      weather: 'sun',
      degrees: '+30°',
      lowerDegree: '+25°',
      info: 'Sunny',
    },
    {
      day: 'Tue',
      number: '23 aug',
      weather: 'run-sun',
      degrees: '+18°',
      lowerDegree: '+15°',
      info: 'Cloudy',
    },
  ];
  return (
    <section>
      <ul className={css.carts_wether_list}>
        {items.map(({ day, number, weather, degrees, lowerDegree, info }) => {
          return (
            <li className={css.carts_wether_item} key={number}>
              <p className={css.carts_wether_day}>{day}</p>
              <p className={css.carts_wether_number}>{number}</p>
              <GlobalSvgSelector id={weather} />
              <p className={css.carts_wether_degrees}>{degrees}</p>
              <p className={css.carts_wether_lower}>{lowerDegree}</p>
              <p className={css.carts_wether_info}>{info}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Carts;
