import React from "react";
import { Link } from "react-router-dom";
import { Desayunos } from "./Desayunos";
import { Hamburguesas } from "./Hamburguesas"


const Menu = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to='/Desayunos'>Desayunos</Link>
        </li>
        <li>
          <Link to='/Hamburguesas'>Hamburguesas</Link>
        </li>
      </ul>
    </nav>
  )
};

export  { Menu };
