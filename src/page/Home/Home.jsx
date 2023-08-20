import css from './Home.module.css';

import ThisDay from 'components/ThisDay/ThisDay';
import Header from '../../components/Header/Header';
import ThisDayDetails from 'components/ThisDayDetails/ThisDayDetails';
import Carts from 'components/Carts/Carts';

const Home = () => {
  return (
    <>
      <Header />
      <div className={css.wrap}>
        <ThisDay />
        <ThisDayDetails />
      </div>
      <Carts />
    </>
  );
};

export default Home;
