import React, { useState } from 'react';
import './Tabs.css';

export const Tabs = ({ tabs, defaultActiveIndex = 0, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-list" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            className={`tab-button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div 
        className="tab-panel"
        role="tabpanel"
        id={`tabpanel-${activeIndex}`}
        aria-labelledby={`tab-${activeIndex}`}
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
