import React from "react";
import Navbar from '.././Navbar';
import Footer from '.././Footer';


import  "../../styles/About.css";




function About() {

    return(
        <div>
            <Navbar />
            
            <div className="about">

                <h5 className="H5">At the heart of Us.</h5>
                    <img className="Img"src={"https://i.pinimg.com/736x/bf/30/b9/bf30b9d3a4be30122a45cc8162ed1124.jpg"} alt="family" />
                <p className="p1">Relationships are at the core of everything we do. Our mission <br></br>is to create a safe and inclusive space where people from all walks of <br></br>life can find meaningful connections with others. </p>
                <h1 className="h">We want anyone looking love</h1>
                <h1 className="H">to be able to find it</h1>
            </div>
            <Footer />
        </div>
    )
    }

export default About