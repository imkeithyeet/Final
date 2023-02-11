import React,{useState , useEffect} from "react";
import Navbar from '.././Navbar';

import  "../../styles/About.css";




function About() {
    const [showSun, setShowSun] = useState(true);
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setShowSun()
  if (theme === 'light') {
    setTheme('dark');
    } else {
    setTheme('light');
    }
    };
    useEffect(() => {
        document.body.className = theme;
          }, [theme]);
      

    return(
        <div>
            <Navbar />
            
            <div className="about">
            <button variant="outline" className="contactDark" onClick={toggleTheme}>{theme === 'dark' ? '𖤓' : '☽'}</button>

                <h5 className="H5">At the heart of Us.</h5>
                    <img className="Img"src={"https://i.pinimg.com/736x/bf/30/b9/bf30b9d3a4be30122a45cc8162ed1124.jpg"} alt="family" />
                <p className="p1">Relationships are at the core of everything we do. </p>
                <h1 className="h">We want anyone looking love</h1>
                <h1 className="H">to be able to find it</h1>
            </div>
        </div>
    )
    }

export default About