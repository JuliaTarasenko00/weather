import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import css from './Header.module.css';
import SelectWeather from 'components/SelectWeather/SelectWeather';

const Header = () => {
  return (
    <section className={css.header}>
      <div className={css.wrapper}>
        <GlobalSvgSelector id="header_logo" />
        <h1 className={css.title}>React weather</h1>
      </div>
      <div className={css.wrapper}>
        <GlobalSvgSelector id="change-theme" />
        <SelectWeather />
      </div>
    </section>
  );
};

export default Header;