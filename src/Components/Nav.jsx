import React from 'react';
import { Link} from "react-router-dom";

const Nav = () => {
  return ( <nav>
    <ul>
      <li >
        <Link to="/Breakfast">Desayunos</Link>
      </li>
      <li>
        <Link to="/Hamburgers">Hamburguesas</Link>
      </li>
      <li>
        <Link to="/SideDishes">Acompañamientos</Link>
      </li>
      <li>
        <Link to="/Drinks">Bebidas</Link>
      </li>
    </ul>
  </nav> );
}

export  { Nav }