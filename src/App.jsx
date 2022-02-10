/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-confusing-arrow */
import React, {
  createContext, useState, useMemo, useCallback,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from './firebase/FirebaseConfig';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Kitchen from './Components/Kitchen';
import DeliveredOrders from './Components/DeliveredOrders';
import menu from './data/burgerqueen.json';

export const globalContext = createContext();

function App() {
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [items, setItems] = useState({
    itemList: menu,
    order: [],
  });
  const [orderStatus, setOrderStatus] = useState(false);

  const addItems = useCallback((item) => setItems({
    ...items,
    order: items.order.find((orderItem) => orderItem.id === item.id)
      ? items.order.map((orderItem) => (orderItem.id === item.id
        ? { ...orderItem, count: orderItem.count + 1 }
        : orderItem))
      : [...items.order, { ...item, count: 1 }],
  }), [items]);

  const removeOrderItem = useCallback((id) => {
    setItems({
      ...items,
      order: items.order.filter((orderItem) => orderItem.id !== id),
    });
  }, [items]);

  const increaseItem = useCallback((id) => {
    setItems({
      ...items,
      order: items.order.map((orderItem) => orderItem.id === id
        ? { ...orderItem, count: orderItem.count + 1 }
        : orderItem),
    });
  }, [items]);
  const decreaseItem = useCallback((id) => {
    setItems({
      ...items,
      order: items.order.map((orderItem) => orderItem.id === id
        ? { ...orderItem, count: orderItem.count > 1 ? orderItem.count - 1 : 1 }
        : orderItem),
    });
  }, [items]);

  const cleanItemsFromOrder = useCallback(() => {
    setItems({
      ...items, order: [],
    });
  }, [items]);

  const editStatus = useCallback(async (id, status) => {
    setOrderStatus(true);
    try {
      const ordersRef = doc(db, 'orders', id);
      await updateDoc(ordersRef, {
        // eslint-disable-next-line object-shorthand
        status: status,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = useMemo(() => ({
    orderStatus,
    setOrderStatus,
    items,
    name,
    setName,
    table,
    setTable,
    setItems,
    addItems,
    removeOrderItem,
    increaseItem,
    decreaseItem,
    cleanItemsFromOrder,
    editStatus,
  }), [orderStatus, addItems, cleanItemsFromOrder, increaseItem,
    decreaseItem, items, editStatus,
    name, removeOrderItem, table]);
  return (

    <globalContext.Provider value={value}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/Delivered" element={<DeliveredOrders />} />
      </Routes>
    </globalContext.Provider>
  );
}

export default App;
