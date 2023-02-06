
import React from 'react';
import '../styles/App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer.js';
import Contact from './pages/Contact';
import LoginForm from './LoginForm';

import About from './pages/About';



function App() {

  
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' exact element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/login" element={<LoginForm/>} />  
        </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;