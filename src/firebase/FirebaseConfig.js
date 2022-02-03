// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAlYVn6nQHpozX49DoVoarjh1fdWPpOUgw',
  authDomain: 'my-burger-queen.firebaseapp.com',
  projectId: 'my-burger-queen',
  storageBucket: 'my-burger-queen.appspot.com',
  messagingSenderId: '636289373018',
  appId: '1:636289373018:web:bf8fb96eec7e91b182d963',
  measurementId: 'G-6F8VM1E86S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
