import React from "react";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu";

function App() {
  return (
    <Routes>
      <switch>
        <Route exact path="/Menu" element={<Menu />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </switch>
    </Routes>
  );
}

export default App;
