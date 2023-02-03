
import React from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer.js';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Contact'  component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;