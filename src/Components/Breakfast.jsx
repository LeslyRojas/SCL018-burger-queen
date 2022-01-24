import React from 'react';
import menu from '../data/burgerqueen.json';

function Breakfast() {
  const { breakfast } = menu;

  return (
    <>
      {breakfast.map((item) => (
        <div>
          <button type="button" key={item.id}>
            <section>{item.name}</section>
            <section>{item.price}</section>
          </button>
        </div>
      ))}
    </>
  );
}

export default Breakfast;
