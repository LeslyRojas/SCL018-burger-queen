/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useState } from 'react';
import {
  collection, onSnapshot,
} from 'firebase/firestore';
import styles from './style.module.css';
import { db } from '../firebase/FirebaseConfig';
import { globalContext } from '../App';
// import StatusBtns from './StatusBtns';

function Kitchen() {
  const menuContext = useContext(globalContext);
  // const editStatus = menuContext.editStatus();

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

  // const changeOrderStatus = () => {
  //   setOrderStatus({
  //     ...orderStatus,
  //     status: 'ready to serve',
  //   });
  // };

  // const updateOrderStatus = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await updateDoc(doc(db, 'orders', document.id), {
  //       status: orderStatus,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     console.log('ha sucedido un  error! eso es lo único que sabemos');
  //   }
  // };

  // const pendingOrders = orderList.filter((document) => {
  //   return document.status === 'pending';
  // });
  const pendingOrders = orderList.filter((document) => document.status === 'pending');
  const cookingOrders = orderList.filter((document) => document.status === 'Cooking');
  const filterTotalOrders = pendingOrders.concat(cookingOrders);

  const sortedOrders = filterTotalOrders.sort((a, b) => {
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
          <div
            key={document.id}
            className={document.status === 'pending'
            ? styles.kitchenOrder
            : styles.kitchenOrderCooking}
          >
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
            <button
              className={styles.cookingStateBtn}
              onClick={() => menuContext.editStatus(document.id, 'Cooking')}
              type="button"
            >
              {document.status === 'Cooking' ? 'Listo para Entregar' : 'Preparar'}

            </button>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default Kitchen;
