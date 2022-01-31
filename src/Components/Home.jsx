import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Home() {
  return (
    <div className={styles.bg}>
      <Link to="/Menu">
        <button className={styles.btnMenu} type="button">MENU</button>
      </Link>
      <Link to="/Kitchen">
        <button className={styles.btnMenu} type="button">COCINA</button>
      </Link>
      <Link to="/Administrator">
        <button className={styles.btnMenu} type="button">ADMINISTRADOR</button>
      </Link>
    </div>
  );
}

export default Home;
