import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import Header from './components/Header';
import Artquiz from './components/art/Artquiz';
import Pictures from './components/pic/Pictures';
import { rotes } from './data/routes';
import Home from './components/home/Home';
import Settings from './components/settings/Settings';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={rotes.HOME} element={<Home />}></Route>
          <Route path={rotes.ART} element={<Artquiz />}></Route>
          <Route path={rotes.PIC} element={<Pictures />}></Route>
          <Route path={rotes.SETTINGS} element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
