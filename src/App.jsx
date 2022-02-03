/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-confusing-arrow */
import React, { createContext, useState } from 'react';
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

  const addItems = (item) => setItems({
    ...items,
    order: items.order.find((orderItem) => orderItem.id === item.id)
      ? items.order.map((orderItem) => (orderItem.id === item.id
        ? { ...orderItem, count: orderItem.count + 1 }
        : orderItem))
      : [...items.order, { ...item, count: 1 }],
  });

  const removeOrderItem = (id) => {
    setItems({
      ...items,
      order: items.order.filter((orderItem) => orderItem.id !== id),
    });
  };
  const increaseItem = (id) => {
    setItems({
      ...items,
      order: items.order.map((orderItem) => orderItem.id === id
        ? { ...orderItem, count: orderItem.count + 1 }
        : orderItem),
    });
  };
  const decreaseItem = (id) => {
    setItems({
      ...items,
      order: items.order.map((orderItem) => orderItem.id === id
        ? { ...orderItem, count: orderItem.count > 1 ? orderItem.count - 1 : 1 }
        : orderItem),
    });
  };
  const cleanItemsFromOrder = () => {
    setItems({
      ...items, order: [],
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
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
  };
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
