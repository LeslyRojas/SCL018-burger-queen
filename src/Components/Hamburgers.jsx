import React from 'react';
import menu from '../data/burgerqueen.json';

function Hamburgers() {
  const { hamburger } = menu;
  return (
    <>
      {hamburger.map((item) => (
        <div>
          <button type="button" key={item.id}>g</button>
          <section>{item.name}</section>
          <section>
            $
            {item.price}
          </section>
        </div>

      ))}
    </>
  );
}

export default Hamburgers;
