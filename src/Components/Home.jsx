import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Link to="/Menu"><button type="button" className="bg-blue">MENU</button></Link>
      <Link to="/Cocina"><button type="button">COCINA</button></Link>
      <Link to="/Administrador"><button type="button">ADMINISTRADOR</button></Link>
    </>

  );
}

export default Home;
