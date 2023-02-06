import React,{useState} from 'react';

function SignUpForm  ({ showLogin, setShowLogin}) {
    // let [authMode, setAuthMode] = useState("signing")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");

    // const changeAuthMode = () => {

    //     setAuthMode(authMode === "signing" ? "signup" : "signing")
    //   }
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
            r.json().then((user) => user);
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
    return (
        <div className="Auth-form-container">
        <form className="signup box" onSubmit={handleSubmit}>
        <div className="register">
          <h3 className="Auth-form-title">Register Your Profile Today</h3>
          <div className="text-center">
            Already registered?{" "}
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
            Forgot <a className="p" href="#">Password?</a>
          </p>
        </div>
        <div>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </div>
        </form>
    </div>
    );
}

export default SignUpForm;
