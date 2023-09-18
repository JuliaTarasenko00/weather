import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';
import css from './Header.module.css';
import SelectWeather from 'components/SelectWeather/SelectWeather';
import { useTheme } from 'provider/ThemeProvider';
import { useCallback } from 'react';

const Header = () => {
  const { setIsDark } = useTheme();

  const toggleTheme = useCallback(() => {
    setIsDark(prevIsDark => !prevIsDark);
  }, [setIsDark]);

  return (
    <section className={css.header}>
      <div className={css.wrapper}>
        <GlobalSvgSelector id="header_logo" />
        <h1 className={css.title}>React weather</h1>
      </div>
      <div className={css.wrapper}>
        <button className={css.button_topic} onClick={toggleTheme}>
          <GlobalSvgSelector id="change-theme" />
        </button>
        <SelectWeather />
      </div>
    </section>
  );
};

export default Header;
