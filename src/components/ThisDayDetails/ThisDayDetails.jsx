import css from './ThisDayDetails.module.css';
import weather from '../../assets/images/weather.png';
import { IndicatorSvgSelector } from 'assets/icons/indicator/Indicator';

const ThisDayDetails = () => {
  const items = [
    {
      iconId: 'temp',
      title: 'Temperature',
      value: '20° feels like 17°',
    },
    {
      iconId: 'pressure',
      title: 'Pressure',
      value: '765 mmHg - normal',
    },
    {
      iconId: 'precipitation',
      title: 'Precipitation',
      value: 'No precipitation',
    },
    {
      iconId: 'wind',
      title: 'Wind',
      value: '3 m/s southwest - light breeze',
    },
  ];
  return (
    <section className={css.day_details}>
      <img src={weather} alt="weather today" className={css.day_details_img} />
      <ul className={css.day_details_list}>
        {items.map(({ iconId, title, value }) => {
          return (
            <li className={css.day_details_item} key={iconId}>
              <div className={css.day_details_indic}>
                <IndicatorSvgSelector id={iconId} />
              </div>
              <p className={css.day_details_title}>{title}</p>
              <p className={css.day_details_text}>{value}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ThisDayDetails;
