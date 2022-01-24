import React from 'react';
import menu from '../data/burgerqueen.json';

function ViewMenu() {
  const { breakfast } = menu;
  const hamburgers = menu.hamburger;
  const sideDishes = menu.sidedish;
  const { drinks } = menu;

  return (
    <>
      {breakfast.map((item) => (
        <button type="button" key={item.id}>
          <section>{item.name}</section>
          <section>
            $
            {item.price}
          </section>
        </button>
      ))}

      {hamburgers.map((item) => (
        <button type="button" key={item.id}>
          <section>{item.name}</section>
          <section>
            $
            {item.price}
          </section>
        </button>
      ))}

      {sideDishes.map((item) => (
        <button type="button" key={item.id}>
          <section>{item.name}</section>
          <section>
            $
            {item.price}
          </section>
        </button>
      ))}

      {drinks.map((item) => (
        <button type="button" key={item.id}>
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
