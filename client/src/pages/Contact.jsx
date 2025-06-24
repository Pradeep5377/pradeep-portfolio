import React from 'react';
// import './Contact.css'; // Use if you're styling externally

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-text">
        I'm always open to new opportunities, collaborations, or simply connecting with like-minded individuals. If you'd like to get in touch, feel free to contact me through any of the methods below.
      </p>

      <ul className="contact-list">
        <li><strong>Email:</strong> <a href="mailto:pradeep5377@gmail.com">pradeep5377@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+919629184880">+91 96291 84880</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pradeep5377" target="_blank" rel="noreferrer">linkedin.com/in/pradeep5377</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/pradeep5377" target="_blank" rel="noreferrer">github.com/pradeep5377</a></li>
        <li><strong>Location:</strong> Coimbatore, Tamil Nadu, India</li>
      </ul>
    </div>
  );
}

export default Contact;
