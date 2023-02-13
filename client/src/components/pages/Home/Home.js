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
      <h1 className="Top-line">What our user had said about us dating</h1>
      <p className="Heading">"My girlfriend and i clicked right away on <br></br>Us Dating, and the conversation was effortless." </p>
      <p className="subtitle">"Rich Brian" </p>

    </>
    
  );
}

export default Home;