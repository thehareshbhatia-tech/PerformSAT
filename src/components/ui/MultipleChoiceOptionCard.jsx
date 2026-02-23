import React from 'react';
import './MultipleChoiceOptionCard.css';

export const MultipleChoiceOptionCard = ({ 
  label, 
  content, 
  selected, 
  status, // 'default', 'correct', 'incorrect'
  onClick,
  disabled
}) => {
  
  let statusClass = '';
  if (status === 'correct') statusClass = 'mc-correct';
  if (status === 'incorrect') statusClass = 'mc-incorrect';
  if (selected && !status) statusClass = 'mc-selected';

  return (
    <button 
      className={`mc-option-card ${statusClass}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
    >
      <span className="mc-label">{label}</span>
      <span className="mc-content">{content}</span>
    </button>
  );
};
