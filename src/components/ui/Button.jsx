import React from 'react';
import './Button.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled,
  onClick,
  ...props 
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Backwards compatibility wrappers
export const PrimaryButton = (props) => <Button variant="primary" size="lg" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" size="lg" {...props} />;
