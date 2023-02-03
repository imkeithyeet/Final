import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home/Home'
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path='/' exact component={Home}/>
      </Routes>
      <Footer />
      </Router>

  );
}
export default App;