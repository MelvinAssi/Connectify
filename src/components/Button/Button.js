import React from 'react';
import './Button.css'; 

const Button = ({ text, onClick, className, style }) => {
  return (
    <button className={`button ${className}`} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

