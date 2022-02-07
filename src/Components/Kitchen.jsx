/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useState } from 'react';
import {
  collection, onSnapshot, updateDoc, doc,
} from 'firebase/firestore';
import styles from './style.module.css';
import { db } from '../firebase/FirebaseConfig';
import { globalContext } from '../App';
// import StatusBtns from './StatusBtns';

function Kitchen() {
  const menuContext = useContext(globalContext);
  const { orderStatus, setOrderStatus } = menuContext;

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, 'orders'),
      (snapshot) => {
        const arrayOrderList = snapshot.docs.map((document) => (
        { ...document.data(), id: document.id }
        ));
        setOrderList(arrayOrderList);
      },
    );
  }, []);

  const changeOrderStatus = () => {
    setOrderStatus({
      ...orderStatus,
      status: 'ready to serve',
    });
  };

  const updateOrderStatus = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'orders', document.id), {
        status: orderStatus,
      });
    } catch (error) {
      console.log('ha sucedido un  error! eso es lo único que sabemos');
      console.log(error);
    }
  };

  const pendingOrders = orderList.filter((document) => {
    return document.status === 'pending';
  });

  const sortedOrders = pendingOrders.sort((a, b) => {
    if (a.time < b.time) {
      return 1;
    } if (a.time > b.time) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      <header>
        <h1>BURGER QUEEN</h1>
      </header>

      <div className={styles.ordersContainer}>
        {sortedOrders.map((document) => (
          <form key={document.id} action="" onSubmit={(e) => changeOrderStatus(e.target)}>
            <div className={styles.kitchenOrder}>
              <div className={styles.orderDetail}>
                <p>
                  Mesa
                  {' '}
                  {document.table}
                </p>
                <p>{document.time}</p>

                <p>
                  Cliente:
                  {' '}
                  {document.name}
                </p>
              </div>
              {document.order.map((order) => (
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
                  {document.totalAmount}
                </p>
              </div>
              <button type="submit" onClick={(e) => updateOrderStatus(e)}>yaapooo</button>
              {/* <StatusBtns id={document.id} status={document.status} /> */}
              <hr />
            </div>
          </form>
        ))}
      </div>
    </>
  );
}

export default Kitchen;
