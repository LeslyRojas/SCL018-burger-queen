import React, { createContext, useState } from 'react';
import menu from '../data/burgerqueen.json';

export const globalContext = createContext();

function AppContext(props) {
  const [items, setItems] = useState({
    itemList: menu,
    order: [],
  });

  // setItems((prevState) => ({
  //   ...prevState,
  //   order: 'value',
  // }));

  const addItems = (item) => setItems({
    ...items,
    order: items.order.find((orderItem) => orderItem.id === item.id)
      ? items.order.map((orderItem) => (orderItem.id === item.id
        ? { ...orderItem, count: orderItem.count + 1 }
        : orderItem))
      : [...items.order, { ...item, count: 1 }],
  });

  const orderProps = {items, setItems, addItems};

  return (
    <globalContext.Provider value={orderProps}>
      {props.children}
    </globalContext.Provider>
  );
}

export default AppContext;
