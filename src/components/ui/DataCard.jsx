import React from 'react';
import './DataCard.css';

export const DataCard = ({ children, title, className = '', hoverable = false }) => {
  return (
    <div className={`data-card ${hoverable ? 'hoverable' : ''} ${className}`}>
      {title && <h3 className="data-card-title">{title}</h3>}
      <div className="data-card-content">
        {children}
      </div>
    </div>
  );
};
