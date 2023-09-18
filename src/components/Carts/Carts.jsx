import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import css from './Carts.module.css';
import { useSelector } from 'react-redux';

const Carts = () => {
  const weatherWeek = useSelector(state => state.weather.weatherWeek);
  const clarity = weather => weather.map(el => el.main).join('');

  const dayWeek = dt => {
    const todayDate = new Date();
    const dayFromBack = new Date(dt * 1000);
    const today = 'Today';
    const dayWeek = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
  
    return todayDate.getUTCDay() === dayFromBack.getUTCDay()
      ? today
      : dayWeek[dayFromBack.getUTCDay()];
  };

  const date = day => {
    const dateNumber = day.split(' ')[0];
    const dateTime = day.split(' ')[1];
    const dateArr = dateNumber.split('-');
    const timeArr = dateTime.split(':');
    const nameOfMount = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    return `${nameOfMount[dateArr[1] - 1]} ${dateArr[2]} | ${timeArr[0]}:${
      timeArr[1]
    }`;
  };

  return (
    <section className={css.carts_wether_section}>
      <ul className={css.carts_wether_list}>
        {weatherWeek.list?.map(({ dt, main, weather, dt_txt }) => {
          return (
            <li className={css.carts_wether_item} key={dt}>
              <p className={css.carts_wether_day}>{dayWeek(dt)}</p>
              <p className={css.carts_wether_number}>{date(dt_txt)}</p>
              <GlobalSvgSelector id={clarity(weather)} />
              <p className={css.carts_wether_degrees}>
                {Math.round(main.temp_max)}°
              </p>
              <p className={css.carts_wether_lower}>
                {Math.round(main.temp_min)}°
              </p>
              <p className={css.carts_wether_info}>{clarity(weather)}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Carts;
