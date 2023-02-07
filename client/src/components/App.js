
import React,{useState, useEffect} from 'react';
import '../styles/App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer.js';
import Contact from './pages/Contact';
import Login from './Login';
import About from './pages/About';
// import Dashboard from './Dashboard';







function App() {
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized]= useState(false)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
        setAuthorized(true)
        setUser(user)});
      }
    });
  }, []);

  if (!user)
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' exact element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/login" element={<Login/>} />  
        </Routes>
        <Footer />
    </Router>
    
  );
  return(
    <Router>
    <Routes>
    {/* <Route path='/Dashboard'  element={()=> <Dashboard authorized={authorized}/>} /> */}
        </Routes>
        <Footer />
        </Router>
  )
}

export default App;