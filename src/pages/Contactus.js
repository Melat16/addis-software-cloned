import React from "react";
import "../styles/Contactus.css";
import AnimatedText from 'react-animated-text-content';

function Contact() {
  return (
    <div className="contact">
      <div className="rightSide">

      <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="wave"
  interval={0.1}
  duration={0.9}
  tag="h1"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.6}
  rootMargin="20%"
>
CONTACT US
</AnimatedText>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
           
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;