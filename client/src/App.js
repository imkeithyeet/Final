
import React from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer.js';
import Contact from './components/pages/Contact';
import LoginForm from './components/LoginForm';
import About from './components/pages/About';



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