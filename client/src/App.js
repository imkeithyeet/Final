import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home/Home'
import Footer from './components/pages/Footer/Footer';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />  
      <Route path='/' exact component={Home} />
      <Route path='/Contact' component={Contact} />
      <Footer />
    </Router>
  );
}
export default App;