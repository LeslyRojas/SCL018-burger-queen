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
      <h1 className={styles.cocina}>Aquí va la cocina</h1>
      {orderList.map((doc) => (
        <div key={doc.id}>
          <p>{doc.time}</p>
          <p>
            Nombre Cliente:
            {' '}
            {doc.name}
          </p>
          <p>
            Mesa
            {' '}
            {doc.table}
          </p>
          {doc.order.map((order) => (
            <div key={order.id}>
              <p>{order.name}</p>
              <p>{order.count}</p>
            </div>
          ))}
          <hr />
        </div>
      ))}
    </>
  );
}

export default Kitchen;
