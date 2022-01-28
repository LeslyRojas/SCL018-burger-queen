import React, { Fragment, useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { globalContext } from '../App';

function Order() {
  const menuContext = useContext(globalContext);

  const handleTotal = () => {
    globalContext.totalOrderAmount();
  };

  return (
    <>
      <h3>Pedido</h3>
      {menuContext.items.order.map((item) => (
        <>
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
          <section>
            <button type="button">Delete</button>
            <button type="button">+</button>
            <button type="button">-</button>
          </section>

        </>

      ))}
      <h3>
        Total:
        {' '}
        {handleTotal}
      </h3>
    </>
  );
}

export default Order;
