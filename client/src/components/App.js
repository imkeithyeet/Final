
import React from 'react';
import '../styles/App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer.js';
import Contact from './pages/Contact';
import Login from './Login';
import About from './pages/About';



function App() {

  
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' exact element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/login" element={<Login/>} />  
        </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;