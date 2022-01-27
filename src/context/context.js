import { createContext } from 'react';
// eslint-disable-next-line import/no-unresolved
import menu from './burgerqueen.json';

const globalContext = createContext(
  {
    itemList: menu,
    order: [],
  },
);

export default globalContext;
