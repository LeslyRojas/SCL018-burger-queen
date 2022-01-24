import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Breakfast from './Components/Breakfast';
import Hamburgers from './Components/Hamburgers';
import SideDishes from './Components/SideDishes';
import Drinks from './Components/Drinks';
import Kitchen from './Components/Kitchen';
import Administrator from './Components/Administrator';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Home" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Kitchen" element={<Kitchen />} />
      <Route path="/Administrator" element={<Administrator />} />
      <Route path="/Breakfast" element={<Breakfast />} />
      <Route path="/Hamburgers" element={<Hamburgers />} />
      <Route path="/SideDishes" element={<SideDishes />} />
      <Route path="/Drinks" element={<Drinks />} />
    </Routes>
  );
}

export default App;
