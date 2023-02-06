import React, {useState} from 'react';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login () {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
        { showLogin ? <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} /> : <SignUpForm setShowLogin={setShowLogin} showLogin={showLogin} /> }
        </div>
    );
}

export default Login;
