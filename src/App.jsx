/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-confusing-arrow */
import React, {
  createContext, useState, useMemo, useCallback,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
// eslint-disable-next-line import/no-cycle
import Menu from './Components/Menu';
import Kitchen from './Components/Kitchen';
import Administrator from './Components/Administrator';
import menu from './data/burgerqueen.json';

export const globalContext = createContext();

function App() {
  const [name, setName] = useState('');
  const [table, setTable] = useState('');

  const [items, setItems] = useState({
    itemList: menu,
    order: [],
  });

  // const [pendingStatus, setPendingStatus] = useState({
  //   status: 'ready to deliver',
  // });
  // const [deliverStatus, setDeliverStatus] = useState({
  //   status: 'delivered',
  // });

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
  // const foo = useMemo(() => ({foo: 'bar'}), []);
  const value = useMemo(() => ({
    // setPendingStatus,
    // pendingStatus,
    // setDeliverStatus,
    // deliverStatus,
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
  }), [addItems, cleanItemsFromOrder, increaseItem,
    decreaseItem, items,
    name, removeOrderItem, table]);
  return (

    <globalContext.Provider value={value}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path="/Administrator" element={<Administrator />} />
      </Routes>
    </globalContext.Provider>
  );
}

export default App;
