import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import ViewMenu from './Components/ViewMenu';
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
      <Route path="/ViewMenu" element={<ViewMenu />} />
    </Routes>
  );
}

export default App;
