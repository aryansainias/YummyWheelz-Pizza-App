import React from 'react';

const Contact = () => {
  const contactStyles = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'left',
    animation: 'fadeIn 1s ease-out',  
  };

  const listStyles = {
    listStyleType: 'none',
    padding: '0',
  };

  const keyframeStyles = `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;

  return (
    <div className="contact-info" style={contactStyles}>
      <style>{keyframeStyles}</style>
      <h2 style={{ color: '#333', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
       CONTACT US
      </h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        We're here to serve you the best pizza experience! Feel free to reach
        out to us through any of the following channels:
      </p>
      <ul style={listStyles}>
        <li>Email: <a href="mailto:info@yummywheelzz.com">info@yummywheelzzapp.com</a></li>
        <li>Phone: <a href="tel:+15551234567">+1 (555) 123-4567</a></li>
        <li>Address: 123 Pizza Street, Pizza Town, PZ 54321</li>
      </ul>
      <p style={{ fontSize: '14px', color: '#666' }}>
        For any inquiries, feedback, or support needs, our team is available to
        assist you. Don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Contact;
