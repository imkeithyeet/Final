import React,{useState} from 'react';
import '../styles/LoginForm.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



export default function LoginForm({ setUser, showLogin, setShowLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((data) => {
          if (data.error){
            console.log(data.error)
            return  
          }
          // you logged in successfully. set user state to the info the server returned (user)
          // redirect if you want
          console.log(data)
          setUser(data);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (
      <>
      <Navbar />
      <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Into Your Us Dating Profile</h3>
        <div className="text-center">
          Not registered yet?{" "}
          <span className="link-primary" onClick={() => setShowLogin(!showLogin)}>
            Sign Up
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="submit">
          <button  type="submit" className="btn btn-primary">
          {isLoading ? "Loading..." : "Login"} 
          </button>
        </div>
        <p className="forgot">
          Forgot <Link to="/" className="p" >Password?</Link>
        </p>
        <div>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </div>
      </div>
      
    </form>
  </div>
  </>
)

}

