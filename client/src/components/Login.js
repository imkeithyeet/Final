import React, {useState} from 'react';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Navigate } from "react-router-dom"
function Login ({user, setUser}) {
    const [showLogin, setShowLogin] = useState(true);
    if (user){
        return <Navigate to ="/Dashboard"/>
    }
    return (
        <div>
        { showLogin ? <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} /> : <SignUpForm setUser={setUser} setShowLogin={setShowLogin} showLogin={showLogin} /> }
        </div>
    );
}

export default Login;
