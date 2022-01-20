import React from "react";
import { Home } from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./Components/Menu";
import { Breakfast } from "./Components/Breakfast";
import { Hamburgers } from "./Components/Hamburgers";
import { SideDishes } from "./Components/SideDishes";
import { Drinks } from "./Components/Drinks";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/Home" element={<Home />}></Route>
      <Route path="/Menu" element={<Menu />}></Route>
      <Route path="/Breakfast" element={<Breakfast />}></Route>
      <Route path="/Hamburgers" element={<Hamburgers />}></Route>
      <Route path="/SideDishes" element={<SideDishes />}></Route>
      <Route path="/Drinks" element={<Drinks />}></Route>
    </Routes>
  );
}

export default App;
