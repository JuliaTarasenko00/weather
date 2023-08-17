import css from './Home.module.css';

import ThisDay from 'components/ThisDay/ThisDay';
import Header from '../../components/Header/Header';
import ThisDayDetails from 'components/ThisDayDetails/ThisDayDetails';
import Button from 'components/Button/Button';
import Carts from 'components/Carts/Carts';

const Home = () => {
  return (
    <>
      <Header />
      <div className={css.wrap}>
        <ThisDay />
        <ThisDayDetails />
      </div>
      <Button />
      <Carts />
    </>
  );
};

export default Home;
