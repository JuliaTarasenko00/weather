import css from './Button.module.css';
const Button = () => {
  return (
    <section className={css.button_section}>
      <div className={css.wrap}>
        <button type="button" className={css.button}>
          For a week
        </button>
        <button type="button" className={css.button}>
          For 10 days
        </button>
        <button type="button" className={css.button}>
          Month
        </button>
      </div>
      <button className={css.button}>Cancel </button>
    </section>
  );
};

export default Button;
