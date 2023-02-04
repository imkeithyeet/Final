
import React from 'react';
import { Link } from "react-router-dom";
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import './Home.css';


function Home() {
  
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Link to="/Sign-up">
     <button className="button" type="button">
          Sign In or Register Today!
     </button>
 </Link>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      
    </>
    
  );
}

export default Home;