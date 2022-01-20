import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to='/Menu'><button>MENU</button></Link>
      <Link to='/Cocina'><button>COCINA</button></Link>
      <Link to='/Administrador'><button>ADMINISTRADOR</button></Link>
    </div>
  );
};

export { Home };
