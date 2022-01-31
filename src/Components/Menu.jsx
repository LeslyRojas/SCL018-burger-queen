import React from 'react';
// eslint-disable-next-line import/no-cycle
import ViewMenu from './ViewMenu';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <h2>MENU</h2>
          <ViewMenu />
        </li>
      </ul>
    </nav>

  );
}

export default Menu;
