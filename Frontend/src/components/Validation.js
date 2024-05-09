// Validation.js

import React from "react";

const Validation = () => {
  // An array of password requirements with corresponding
  // regular expressions and index of the requirement list item
  const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
  ];

  return (
    <div className="content">
      <p>Password must contain:</p>
      <ul className="requirement-list">
        {requirements.map((item, index) => (
          <li key={index}>
            <i className="fa-solid fa-circle"></i>
            <span>{item.regex.toString().slice(2, -2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Validation;
