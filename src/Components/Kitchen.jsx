/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import React, { useEffect, useState, useContext } from 'react';
import {
  collection, onSnapshot, updateDoc, doc,
} from 'firebase/firestore';
import { globalContext } from '../App';
import styles from './style.module.css';
import { db } from '../firebase/FirebaseConfig';

function Kitchen() {
  const menuContext = useContext(globalContext);

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

  const changeCookingStatus = () => {
    menuContext.setCookingStatus({
        ...menuContext.cookingStatus,
        status: 'Cooking',
      });
  };

  const updateKitchenStatus = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'orders', document.id), {
        status: menuContext.cookingStatus,
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(updateKitchenStatus);

  return (
    <>
      <header>
        <h1>BURGER QUEEN</h1>
      </header>
      <div className={styles.ordersContainer}>
        {sortedOrders.map((document) => (
          <div className={styles.kitchenOrder} key={document.id}>
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
            <div className={styles.statusBtns}>
              <button className={styles.pendingOrderBtn} type="submit" onClick={(e) => updateKitchenStatus(e)}>En Preparación</button>
              <button className={styles.readyOrderBtn} type="submit">Listo para servir</button>
            </div>
            <hr />
          </div>
        ))}
      </div>

    </>
  );
}

export default Kitchen;
