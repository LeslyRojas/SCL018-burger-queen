// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable react/prop-types */
// import React, { useState } from 'react';
// import { updateDoc, doc } from 'firebase/firestore';
// import { db } from '../firebase/FirebaseConfig';
// import styles from './style.module.css';

// function StatusBtns() {
//   const [cookingStatus, setCookingStatus] = useState({
//   });
//   // const [deliverStatus, setDeliverStatus] = useState({
//   //   status: 'ready to deliver',
//   // });
//   const changeCookingStatus = () => {
//     if (cookingStatus === 'cooking') {
//       return;
//     }
//     try {
//       updateDoc(doc(db, 'orders', document.id), {
//         status: 'cooking',
//       });
//       setCookingStatus('cooking');
//     } catch (error) {
//       throw new Error('error al actualizar el status');
//     }
//   };

//   // const updateKitchenStatus = async (e) => {
//   //   e.preventDefault();

//   // };

//   return (
//     <div className={styles.containerBtns}>
//       <div className={styles.statusBtns}>
//         { cookingStatus === 'pending' ? (
//           <button
//             onClick={() => changeCookingStatus()}
//             className={styles.pendingOrderBtn}
//             type="button"
//           >
//             En Preparación
//           </button>
//         )
//           : (
//             <button
//               className={styles.readyOrderBtn}
//               type="submit"
//             >
//               Listo para servir
//             </button>
//           )}
//       </div>
//     </div>

//   );
// }

// export default StatusBtns;
