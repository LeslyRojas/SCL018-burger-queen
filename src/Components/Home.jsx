import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/Menu">
        <button type="button">MENU</button>
      </Link>
      <Link to="/Kitchen">
        <button type="button">COCINA</button>
      </Link>
      <Link to="/Administrator">
        <button type="button">ADMINISTRADOR</button>
      </Link>
    </div>
  );
}

export default Home;
