/* eslint-disable import/no-cycle */
/* eslint-disable react/react-in-jsx-scope */
import React, { useContext } from 'react';
import { globalContext } from '../App';
import styles from './style.module.css';

function Client() {
  const menuContext = useContext(globalContext);
  return (
    <div className={styles.clientContainer}>
      <input type="text" name="name" value={menuContext.name} onChange={(e) => menuContext.setName(e.target.value)} placeholder="Nombre del cliente" />
      <input type="text" name="table" value={menuContext.table} onChange={(e) => menuContext.setTable(e.target.value)} placeholder="Número de mesa" />
    </div>

  );
}

export default Client;
