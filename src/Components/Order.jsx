/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
import React, { Fragment, useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { globalContext } from '../App';
import styles from './style.module.css';

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
      <div className={styles.orderNav}>
        <p>Producto</p>
        <p>Cantidad</p>
        <p>Total </p>
      </div>
      {menuContext.items.order.map((item) => (
        <div
          key={item.id}
          className={styles.container}
        >
          <section>
            {item.name}
            <p>
              $
              {' '}
              {item.price}
            </p>

          </section>
          <button className={styles.deleteBtn} type="button" onClick={() => handleDelete(item.id)}>Delete</button>
          <div className={styles.quantity}>
            <button className={styles.increaseBtn} type="button" onClick={() => handleIncrease(item.id)}>+</button>
            <p>
              {' '}
              {item.count}
            </p>
            <button className={styles.decreaseBtn} type="button" onClick={() => handleDecrease(item.id)}>-</button>
          </div>
          <p>
            $
            {' '}
            {item.price * item.count}
          </p>

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
