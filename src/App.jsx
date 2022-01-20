import React from "react";
import { Home } from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { Desayunos } from "./Components/Desayunos"
import { Hamburguesas } from "./Components/Hamburguesas"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Home"  element={<Home />}></Route>
        <Route path="/Menu"  element={<Menu />}></Route>
        <Route path="/Desayunos"  element={<Desayunos />}></Route>
        <Route path="/Hamburguesas"  element={<Hamburguesas />}></Route>
    </Routes>
  );
}

export default App;
