import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Earth from './Components/Earth/Earth';


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/solarSystem" element={<Home/>} />
        <Route path="/" element={<Earth/>} />
       
      </Routes>
    </Router>
  );
};

export default App;
