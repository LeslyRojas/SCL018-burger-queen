import React, { useState, useContext } from 'react';
import menu from '../data/burgerqueen.json';
import styles from './style.module.css';
import { globalContext } from './AppContext';
// import Order from './Order';

function ViewMenu() {
  const menuContext = useContext(globalContext);

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
      <hr />

      {food.map((item) => (
        <button className={styles.card} type="button" key={item.id} onClick={() => menuContext.addItems(item)}>
          <img className={styles.image} src={item.image} alt="" />
          <section>{item.name}</section>
          <section>
            $
            {item.price}
          </section>
        </button>
      ))}
      {/* <Order /> */}
    </>
  );
}

export default ViewMenu;
