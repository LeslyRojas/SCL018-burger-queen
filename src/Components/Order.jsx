/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
import React, { Fragment, useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { globalContext } from '../App';

function Order() {
  const menuContext = useContext(globalContext);

  const handleDelete = (id) => {
    menuContext.removeOrderItem(id);
  };

  const handleIncrease = (id) => {
    menuContext.increaseItem(id);
    console.log(handleIncrease);
  };

  const handleDecrease = (id) => {
    menuContext.decreaseItem(id);
  };
  const totalOrderAmount = menuContext.items.order
    // eslint-disable-next-line no-return-assign
    .reduce((total, item) => (total = total + item.price * item.count), 0);

  const totalOrderCount = menuContext.items.order
    .reduce((total, item) => (total = total + item.count), 0);

  return (
    <>
      <h3>Pedido</h3>
      {menuContext.items.order.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>
            $
            {' '}
            {item.price}
          </p>

          <section>
            <button type="button" onClick={() => handleIncrease(item.id)}>+</button>
            <p>
              x
              {' '}
              {item.count}
            </p>
            <button type="button" onClick={() => handleDecrease(item.id)}>-</button>
          </section>
          <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>
          <p>
            total por producto $
            {' '}
            {item.price * item.count}
          </p>
          <hr />
        </div>

      ))}
      <h3>
        {' '}
        Total de Productos:
        {' '}
        {totalOrderCount}
      </h3>
      <h3>
        Total:
        $
        {' '}
        {totalOrderAmount}
      </h3>
    </>
  );
}

export default Order;
