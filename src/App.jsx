import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Education from './Education';
import Hobbies from './Hobbies';
import Contacts from './Contacts';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
