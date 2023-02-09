import Navbar from '../../Navbar';
import React from 'react';
import { Link } from "react-router-dom";
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import './Home.css';


function Home() {
 
  return (
    <>
          <Navbar />

      <HeroSection {...homeObjOne} />
     
      <Link to="/login">
     <button className="button" type="button">
          Sign In or Register Today!
     </button>
    </Link>
      <HeroSection {...homeObjThree} />
      <img className="dating" src={'https://i.kym-cdn.com/entries/icons/original/000/017/323/OnlineDating1.jpg'} alt="Two" />

      <HeroSection {...homeObjTwo} />
      
    </>
    
  );
}

export default Home;