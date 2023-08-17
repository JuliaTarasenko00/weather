import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import css from './ThisDay.module.css';

const ThisDay = () => {
  return (
    <section className={css.this_day}>
      <div className={css.this_day_wrapper}>
        <div className={css.this_day_info}>
          <p className={css.this_day_temperature}>20°</p>
          <h2 className={css.this_day_title}>Today</h2>
        </div>
        <div className={css.this_day_svg}>
          <GlobalSvgSelector id="sun" />
        </div>
      </div>
      <ul className={css.this_day_list}>
        <li className={css.this_day_item}>Time: 20:17</li>
        <li className={css.this_day_item}>City: Odessa</li>
      </ul>
    </section>
  );
};

export default ThisDay;
