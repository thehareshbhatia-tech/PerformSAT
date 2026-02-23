import React from 'react';
import './Button.css';

export const PrimaryButton = ({ children, onClick, disabled, className = '', ...props }) => {
  return (
    <button 
      className={`btn-primary ${className}`} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick, disabled, className = '', ...props }) => {
  return (
    <button 
      className={`btn-secondary ${className}`} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
