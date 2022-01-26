import React, { createContext, useState } from 'react';
import menu from '../data/burgerqueen.json';

const globalContext = createContext();

function AppContext() {
  const [items, setItems] = useState({
    itemList: menu,
    order: [],
  });

setItems((prevState) => ({
    ...prevState,
    order: 'value',
  }));

  const addItems = (item) => {
    return setItems({
      ...prevState, 
      order: item.order.find((orderItem => orderItem.id === item.id)? {...orderItem, count:orderItem.count +1}:orderItem)
  })
  }
  




  return <div />;
}

export default AppContext;
