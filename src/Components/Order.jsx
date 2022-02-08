/* eslint-disable import/no-named-as-default */
/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
import React, { useContext } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/FirebaseConfig';
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

  const submit = async (e) => {
    e.preventDefault(e);
    const orderDate = new Date();
    const orderTime = `${orderDate.getHours()}:${orderDate.getMinutes()}:${orderDate.getSeconds()}`;

    if (menuContext.name === ' ' || menuContext.table === ' ') {
      // eslint-disable-next-line no-alert
      alert('Completa los campos antes de enviar pedido');
    } else {
      try {
        await addDoc(collection(db, 'orders'), {
          time: orderTime,
          name: menuContext.name,
          table: menuContext.table,
          order: menuContext.items.order,
          totalAmount: totalOrderAmount,
          status: 'pending',
        });
      } catch (error) {
        console.log(error);
      }
      menuContext.setName('');
      menuContext.setTable('');
      menuContext.cleanItemsFromOrder();
    }
  };

  return (
    <form action="" onSubmit={submit}>
      <div className={styles.clientInfo}>
        <h3>Pedido</h3>
        <p>
          Cliente:
          {' '}
          {menuContext.name}
        </p>
        <p>
          Mesa:
          {' '}
          {menuContext.table}
        </p>
      </div>

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
          <section className={styles.itemInfo}>
            {item.name}
            <p className={styles.itemPrice}>
              $
              {' '}
              {item.price}
            </p>

          </section>
          <div className={styles.quantity}>
            <button className={styles.increaseBtn} type="button" onClick={() => handleIncrease(item.id)}> + </button>
            <p>
              {'   '}
              {item.count}
              {'   '}
            </p>
            <button className={styles.decreaseBtn} type="button" onClick={() => handleDecrease(item.id)}> - </button>
          </div>
          <button className={styles.deleteBtn} type="button" onClick={() => handleDelete(item.id)}>Delete</button>
          <p>
            $
            {' '}
            {item.price * item.count}
          </p>

        </div>
      ))}
      <div className={styles.totalProductsAndAmount}>
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
      </div>
      <button className={styles.sendBtn} type="submit">Enviar Pedido</button>
    </form>
  );
}

export default Order;
