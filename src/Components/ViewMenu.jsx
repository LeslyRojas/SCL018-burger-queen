import React, { useState } from 'react';
import menu from '../data/burgerqueen.json';
import styles from './style.module.css';

function ViewMenu() {
  const [food, setFood] = useState([]);

  const toFilter = (category) => {
    setFood(menu[category]);
  };

  return (
    <>
      <button className={styles.nav} type="button" onClick={() => toFilter('breakfast')}>Desayunos</button>
      <button className={styles.nav} type="button" onClick={() => toFilter('hamburger')}>Hamburguesas</button>
      <button className={styles.nav} type="button" onClick={() => toFilter('sidedish')}>Acompañamientos</button>
      <button className={styles.nav} type="button" onClick={() => toFilter('drinks')}>Bebidas</button>

      {food.map((item) => (
        <button className={styles.card} type="button" key={item.id}>
          <img className={styles.image} src={item.image} alt="" />
          <section>{item.name}</section>
          <section>
            $
            {item.price}
          </section>
        </button>
      ))}
    </>
  );
}

export default ViewMenu;
