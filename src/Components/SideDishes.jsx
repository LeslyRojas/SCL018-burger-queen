import React from 'react';
import menu from '../data/burgerqueen.json';

function SideDishes() {
  const sideDishes = menu.sidedish;

  return sideDishes.map((item) => (
    <div className="my-20">
      <button type="button">{item.image}</button>
      <section>{item.name}</section>
      <section>{item.price}</section>
    </div>
  ));
}

export default SideDishes;
