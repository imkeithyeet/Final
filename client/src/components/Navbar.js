import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom"
import { Button } from './Button';
import '../styles/Navbar.css'

function Navbar() {

    const [click, setClick]= useState(false)
    const[button, setButton] = useState(true)

    const closeMobileMenu =()=> setClick(false)
    const showButton =()=> {
        if(window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()

    },[])
    window.addEventListener('resize', showButton)
    return (
        <div>
            <div className="navbar">
                <div className=".navbar-container.container ">
                    <Link  to ='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="../images/Logo.png" alt="logo" width={350} height={350}/>

                    </Link> 
                        <ul className={click ? 'nav-menu active': 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links"onClick={closeMobileMenu}>
                                    Home
                                </Link> 
                                </li>  
                                <li className="nav-item"onClick={closeMobileMenu}>
                                <Link to='/About' className="nav-links">
                                    About
                                </Link> 
                                </li>  
                                <li className="nav-item">
                                <Link to='/Contact' className="nav-links" onClick={closeMobileMenu}>
                                    Contact Us
                                </Link> 
                                </li>  
                            <li className="nav-btn">
                                {button ? (
                                    <Link 
                                    to='/login'
                                     className="btn-link"
                                     >
                                        <Button buttonStyle="btn--outline">LOGIN/SIGN UP</
                                        Button>
                                    </Link>
                                ): (
                                    <Link to='/sign-up'
                                    className="btn-link"
                                    onClick={closeMobileMenu}>
                                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                                            SIGN UP
                                             </Button>
                                    </Link>
                                )}
                                </li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;