import React,{useState} from 'react';
import '../styles/LoginForm.css'


export default function LoginForm({onLogin, props, showLogin, setShowLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // let [authMode, setAuthMode] = useState("signing")


  // const changeAuthMode = () => {

  //   setAuthMode(authMode === "signing" ? "signup" : "signing")
  // }

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
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  

    return (
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
          Forgot <a className="p" href="#">Password?</a>
        </p>
        <div>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </div>
      </div>
      
    </form>
  </div>
)

}

