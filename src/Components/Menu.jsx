/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-cycle */
import React from 'react';
import { Link } from 'react-router-dom';
import ViewMenu from './ViewMenu';

import styles from './style.module.css';

function Menu() {
  return (
    <>
      <header>
        <div className={styles.menuHeader}>
          <div><h2>MENU</h2></div>
          <div className={styles.menuHeaderBtns}>
            <button type="button" className={styles.routesBtns}>
              <Link to="/Home" className={styles.linksBtns}>Home</Link>
            </button>
            <button type="button" className={styles.routesBtns}><Link to="/Delivered" className={styles.linksBtns}>Pedidos por Entregar</Link></button>

          </div>
        </div>
      </header>

      <hr />
      <ViewMenu />
    </>
  );
}

export default Menu;
