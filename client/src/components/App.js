import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import '../styles/input.css';

import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer.js';
import Contact from './pages/Contact';
import Login from './Login';
import About from './pages/About';
import Dashboard from './Dashboard';
import Profile from './pages/Profile';
import Matches from './pages/Matches';
import ContactForm from './pages/ContactForm';


function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
      }  else {
        setUser(null)
      }
    });
  }, []);
  console.log(user)
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/Dashboard" element={<Dashboard user={user} setUser={setUser}/>} />
        <Route path="/Profile" element={<Profile user={user} setUser={setUser}/>} />
       <Route path="/Matches" element={<Matches user={user} setUser={setUser}/>} />
        <Route path="/ContactForm" element={<ContactForm user={user} setUser={setUser}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
