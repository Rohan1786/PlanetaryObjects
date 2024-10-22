import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Earth from './Components/Earth/Earth';


const App = () => {
  return (
    <Router>
      
      <Routes>
      
        <Route path="/" element={<Earth/>} />
        <Route path="/solarsystem" element={<Home/>} />
       
      </Routes>
    </Router>
  );
};

export default App;
