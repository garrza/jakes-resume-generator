import React from 'react';
import './Header.css';

const Header = ({ name, email, phone, linkedin, github }) => (
  <div className="header">
    <h1 className="name">{name}</h1>
    <div className="contact-info">
      <p>{phone} | <a href={`mailto:${email}`}>{email}</a></p>
      <p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          {linkedin}
        </a>
        |
        <a href={github} target="_blank" rel="noopener noreferrer">
          {github}
        </a>
      </p>
    </div>
  </div>
);

export default Header;