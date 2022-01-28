import React, { Fragment, useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { globalContext } from '../App';

function Order() {
  const menuContext = useContext(globalContext);

  // const handleTotal = () => {
  //   globalContext.totalOrderAmount();
  // };

  return (
    <>
      <h3>Pedido</h3>
      {menuContext.items.order.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>

          <section>
            <button type="button">Delete</button>
            <button type="button">+</button>
            <button type="button">-</button>
          </section>
        </div>

      ))}
      <h3>
        Total:
        {' '}
        {/* {handleTotal} */}
      </h3>
    </>
  );
}

export default Order;
