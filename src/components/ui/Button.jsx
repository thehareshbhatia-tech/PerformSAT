import React from 'react';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  loading = false,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}${loading ? ' btn-loading' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <span className="btn-spinner" aria-hidden="true" />}
      {children}
    </button>
  );
};

// Backwards compatibility wrappers
export const PrimaryButton = (props) => <Button variant="primary" size="lg" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" size="lg" {...props} />;
