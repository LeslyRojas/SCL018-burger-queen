/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-cycle */
import React, { useState, useContext } from 'react';
import menu from '../data/burgerqueen.json';
import Client from './Client';
import styles from './style.module.css';
// eslint-disable-next-line import/no-cycle
import { globalContext } from '../App';
import Order from './Order';

function ViewMenu() {
  const menuContext = useContext(globalContext);

  const [food, setFood] = useState([]);

  const toFilter = (category) => {
    setFood(menu[category]);
  };
  const handleAdd = (item) => {
    menuContext.addItems(item);
  };
  return (
    <>
      <Client />
      <div className={styles.containerMenu}>
        <button className={styles.nav} type="button" onClick={() => toFilter('breakfast')}>Desayunos</button>
        <button className={styles.nav} type="button" onClick={() => toFilter('hamburger')}>Hamburguesas</button>
        <button className={styles.nav} type="button" onClick={() => toFilter('sidedish')}>Acompañamientos</button>
        <button className={styles.nav} type="button" onClick={() => toFilter('drinks')}>Bebidas</button>
        {food.map((item) => (
          <button className={styles.card} type="button" key={item.id} onClick={() => handleAdd(item)}>
            <img className={styles.image} src={item.image} alt="" />
            <section>{item.name}</section>
            <section>
              $
              {' '}
              {item.price}
            </section>
          </button>
        ))}
        <Order />
      </div>

    </>
  );
}

export default ViewMenu;
