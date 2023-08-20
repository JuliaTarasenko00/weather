import { useSelector } from 'react-redux';
import css from './Home.module.css';

import ThisDay from 'components/ThisDay/ThisDay';
import Header from '../../components/Header/Header';
import ThisDayDetails from 'components/ThisDayDetails/ThisDayDetails';
import Carts from 'components/Carts/Carts';

const Home = () => {
  const weather = useSelector(state => state.weather.weather);
  return (
    <>
      <Header />
      {weather.length !== 0 ? (
        <>
          <div className={css.wrap}>
            <ThisDay />
            <ThisDayDetails />
          </div>

          <Carts />
        </>
      ) : (
        <p>Hello</p>
      )}
    </>
  );
};

export default Home;
