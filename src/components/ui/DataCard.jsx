import React from 'react';
import './DataCard.css';

export const DataCard = ({ children, title, className = '', hoverable = false, style, onClick, ...rest }) => {
  return (
    <div
      className={`data-card ${hoverable ? 'hoverable' : ''} ${className}`}
      style={style}
      onClick={onClick}
      {...rest}
    >
      {title && <h3 className="data-card-title">{title}</h3>}
      <div className="data-card-content">
        {children}
      </div>
    </div>
  );
};
