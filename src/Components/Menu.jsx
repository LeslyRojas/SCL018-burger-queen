/* eslint-disable import/no-cycle */
import React from 'react';
import ViewMenu from './ViewMenu';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <h1>MENU</h1>
          <ViewMenu />
        </li>
      </ul>
    </nav>

  );
}

export default Menu;
