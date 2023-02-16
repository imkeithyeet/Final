import React,{useState, useEffect} from "react";
import  "../../styles/Contact.css";
import NavBarLoggedIn from '../NavBarLoggedIn';
import Footer from '../Footer';
import  "../../styles/DarkMode.css";





const FORM_ENDPOINT = "https://public.herotofu.com/v1/d7d78ef0-9ede-11ed-82c7-3d7607318e65";

const ContactForm = ({user,setUser}) => {
  const [submitted, setSubmitted] = useState(false);
   const [theme, setTheme] = useState(   
     localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');

    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');

    }
  };
   useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  
  if (submitted) {
    return (
      <>
       <NavBarLoggedIn user={user} setUser={setUser} />
       <p1 className="text-center">✅</p1>
        <h2 className="thank">Thank you!</h2>
        <div className="soon">We'll be in touch soon.</div>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <NavBarLoggedIn user={user} setUser={setUser} />
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
        <div>
        <h1 className="H3">Contact Us</h1>
        </div>
        <div>
        <p className="text-left">Send Us a Message Today:</p>
        </div>
        <div className="bars">
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      </div>
      <div className="bar">
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div className="send">
        <button type="submit"> Send a message </button>
      </div>
      
      <p className= "P3"> By submitting your message and personal details you are permitting us to contact you by these means in response to your inquiry. </p>
    </form>
          <button className="toggle" onClick={toggleTheme}>{theme === 'dark' ? '𖤓' : '☽'}</button>

    <Footer/>
    </div>
  );
};

export default ContactForm;