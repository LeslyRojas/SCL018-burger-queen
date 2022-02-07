import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import styles from './style.module.css';
import { db } from '../firebase/FirebaseConfig';

function Kitchen() {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, 'orders'),
      (snapshot) => {
        const arrayOrderList = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }
        ));
        setOrderList(arrayOrderList);
      },
    );
  }, []);

  return (
    <>
      <header>
        <h1>BURGER QUEEN</h1>
      </header>
      <div className={styles.ordersContainer}>
        {orderList.map((doc) => (
          <div className={styles.kitchenOrder} key={doc.id}>
            <div className={styles.orderDetail}>
              <p>
                Mesa
                {' '}
                {doc.table}
              </p>
              <p>{doc.time}</p>

              <p>
                Cliente:
                {' '}
                {doc.name}
              </p>
            </div>
            {doc.order.map((order) => (
              <div className={styles.orderProductCount} key={order.id}>
                <p>{order.name}</p>
                <p>{order.count}</p>
              </div>
            ))}
            <div className={styles.totalSum}>
              <p>
                Total:
                {' '}
                $
                {' '}
                {doc.totalAmount}
              </p>
            </div>
            <div className={styles.statusBtns}>
              <button className={styles.pendingOrderBtn} type="button">En Preparación</button>
              <button className={styles.readyOrderBtn} type="button">Listo para servir</button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default Kitchen;
