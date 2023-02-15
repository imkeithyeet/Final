import React,{useState} from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



function SignUpForm  ({  setUser,showLogin, setShowLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");

    
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
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            password_confirmation: passwordConfirmation,
          }),
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
        <form className="signup box" onSubmit={handleSubmit}>
        <div className="register">
          <h3 className="Auth-form-title">Register Your Profile Today</h3>
          <div className="text-center">
            Already Registered?{" "}
            <span className="link-primary" onClick={() => setShowLogin(!showLogin)}>
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
            {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
          <p className="forgot">
          Forgot <Link to="/" className="p" >Password?</Link>
          </p>
        </div>
        <div>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </div>
        </form>
    </div>
    </>
    );
}

export default SignUpForm;
