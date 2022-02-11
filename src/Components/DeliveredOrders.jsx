/* eslint-disable import/no-cycle */
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  collection, onSnapshot,
} from 'firebase/firestore';
import { globalContext } from '../App';
import { db } from '../firebase/FirebaseConfig';
import styles from './style.module.css';

function DeliveredOrders() {
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

  const readyOrders = orderList.filter((document) => document.status === 'Ready');
  const deliveredOrders = orderList.filter((document) => document.status === 'Delivered');
  const filterReadyOrders = readyOrders.concat(deliveredOrders);

  const sortedOrders = filterReadyOrders.sort((a, b) => {
    if (a.time < b.time) {
      return 1;
    } if (a.time > b.time) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      <header className={styles.deliveredOrdersHeader}>
        <h1>BURGER QUEEN</h1>
      </header>
      <nav className={styles.deliveredOrdersNav}>
        <button type="button" className={styles.routesBtns}>
          <Link to="/Menu" className={styles.linksBtns}>Volver al Menú</Link>
        </button>
      </nav>
      <h2>Pedidos por entregar</h2>
      <div className={styles.ordersContainer}>
        {sortedOrders.map((document) => (
          <div
            key={document.id}
            className={document.status === 'Delivered'
              ? styles.kitchenOrderCooking
              : styles.kitchenOrder}
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
              className={styles.deliveredStateBtn}
              onClick={() => menuContext.editStatus(document.id, 'Delivered')}
              type="button"
            >
              {document.status === 'Delivered' ? 'Entregado' : 'Listo para entregar'}
            </button>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default DeliveredOrders;
