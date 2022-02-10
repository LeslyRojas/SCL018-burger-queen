import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>BURGER QUEEN</h1>
      </header>
      <div className={styles.homeContainer}>
        <Link to="/Menu">
          <button className={styles.btnMenu} type="button">MENU</button>
        </Link>
        <Link to="/Kitchen">
          <button className={styles.btnMenu} type="button">COCINA</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
