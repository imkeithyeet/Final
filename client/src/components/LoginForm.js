import React,{useState} from 'react';
import '../styles/LoginForm.css'


export default function LoginForm({onLogin, props}) {
  let [authMode, setAuthMode] = useState("signing")
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [lastName, setLastName] = useState("");



  const changeAuthMode = () => {
    setAuthMode(authMode === "signing" ? "signup" : "signing")
  }
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
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  

  if (authMode === "signing") {
    return (

      <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Into Your Us Dating Profile</h3>
        <div className="text-center">
          Not registered yet?{" "}
          <span className="link-primary" onClick={changeAuthMode}>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div>
      </div>
        <p className="forgot">
          Forgot <a className="p" href="#">Password?</a>
        </p>
      </div>
    </form>
  </div>
)
  }

  return (
    <div className="Auth-form-container">
      <form className="box">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register Your Profile Today</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="first name"
              className="form-control mt-1"
              placeholder="e.g Jane"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="last name"
              className="form-control mt-1"
              placeholder="e.g Doe"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password Confirmation</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password Confirmation"
              onChange={(e) => setPasswordConfirmation(e.target.value)}

            />
          </div>
          <div className="submit">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot">
            Forgot <a className="p" href="#">Password?</a>
          </p>
        </div>
        </form>
    </div>
  )
}

