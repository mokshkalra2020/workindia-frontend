import React from 'react';
import './Card.css';

const card = ({ title, subheadings }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {subheadings.map((subheading, index) => (
          <li key={index}>
            <span className="subheading-logo"><img src="https://via.placeholder.com/18x18" alt="Icon"/></span> {subheading}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default card;
