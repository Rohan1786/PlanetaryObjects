import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './Components/Home/Home';

import PlanetarySystem from './Components/Planet/PlanetarySystem';
import Earth from './Components/Planets/Earth/Earth';


const App = () => {
  return (
    <Router>
      
      <Routes>
      
        <Route path="/" element={<Earth/>} ></Route>
        <Route path="/solarsystem" element={<PlanetarySystem/>} ></Route>
       
      </Routes>
    </Router>
  );
};

export default App;
