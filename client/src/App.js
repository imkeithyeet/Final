
import React from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer.js';
import Contact from './components/pages/Contact';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/LoginForm" element={<LoginForm/>} />      
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;