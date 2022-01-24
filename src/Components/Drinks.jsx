import React from 'react';
import menu from '../data/burgerqueen.json';

function Drinks() {
  const { drinks } = menu;

  return drinks.map((item) => (
    <div className="my-20">
      <button type="button">{item.image}</button>
      <section>{item.name}</section>
      <section>{item.price}</section>
    </div>
  ));
}

export default Drinks;
