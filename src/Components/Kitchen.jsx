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
        console.log(arrayOrderList);
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
          <p>{doc.name}</p>
          <p>{doc.table}</p>
          <p>{doc.order.array}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Kitchen;
// time: orderTime,
//           name: menuContext.name,
//           table: menuContext.table,
//           order: menuContext.items.order,
//           totalAmount: totalOrderAmount,

// export const readData = (callback) => {
//   const q = query(collection(db, 'users'), orderBy('datePosted', 'desc'));
//   const dataPost = [];
//   onSnapshot(q, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       dataPost.push({ id: doc.id, ...doc.data() });
//     });
//     callback(dataPost)
//   });
// };
