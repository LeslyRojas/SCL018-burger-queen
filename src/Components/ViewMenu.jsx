import React from 'react';
import menu from '../data/burgerqueen.json';
import styles from './style.module.css';

function ViewMenu() {
  const { breakfast } = menu;
  const hamburgers = menu.hamburger;
  const sideDishes = menu.sidedish;
  const { drinks } = menu;

  return (
    <>
      {breakfast.map((item) => (
        <button className={styles.card} type="button" key={item.id}>
          <img className={styles.image} src={item.image} alt="" />
          <section>{item.name}</section>
          <section>
            $
            {item.price}
          </section>
        </button>
      ))}

      {hamburgers.map((item) => (
        <button className={styles.card} type="button" key={item.id}>
          <img className={styles.image} src={item.image} alt="" />
          <section>{item.name}</section>
          <section>
            $
            {item.price}
          </section>
        </button>
      ))}

      {sideDishes.map((item) => (
        <button className={styles.card} type="button" key={item.id}>
          <img className={styles.image} src={item.image} alt="" />
          <section>{item.name}</section>
          <section>
            $
            {item.price}
          </section>
        </button>
      ))}

      {drinks.map((item) => (
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
