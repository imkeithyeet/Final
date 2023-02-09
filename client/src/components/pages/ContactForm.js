import React,{useState} from "react";
import  "../../styles/Contact.css";
import NavBarLoggedIn from '../NavBarLoggedIn';




const FORM_ENDPOINT = "https://public.herotofu.com/v1/d7d78ef0-9ede-11ed-82c7-3d7607318e65";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  
  if (submitted) {
    return (
      <>
       <p1 className="text-center">✅</p1>
        <h2 className="thank">Thank you!</h2>
        <div className="soon">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
      <NavBarLoggedIn />
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
        <p1 class="text-left">Send Us a Message Today:</p1>
        </div>
        <wrapper className="bars">
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      </wrapper>
      <div className="bar">
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div className="send">
        <button type="submit"> Send a message </button>
      </div>
      
      <p3 className= "P3"> By submitting your message and personal details you are permitting us to contact you by these means in response to your inquiry. </p3>
    </form>
    </div>
  );
};

export default ContactForm;