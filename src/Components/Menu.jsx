import React from 'react';
import ViewMenu from './ViewMenu';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <h2>Menu del día</h2>
          <ViewMenu />
        </li>
      </ul>
    </nav>

  );
}

export default Menu;
