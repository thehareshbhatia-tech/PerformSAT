import React from 'react';
import './AiTutorChatBubble.css';

export const AiTutorChatBubble = ({ message, isUser, timestamp }) => {
  return (
    <div className={`chat-bubble-wrapper ${isUser ? 'user' : 'ai'}`}>
      {!isUser && (
        <div className="chat-avatar">
          <span aria-label="Tutor">AI</span>
        </div>
      )}
      
      <div className="chat-bubble">
        <p className="chat-text">{message}</p>
        {timestamp && <span className="chat-time">{timestamp}</span>}
      </div>

      {isUser && (
        <div className="chat-avatar">
          <span aria-label="You">You</span>
        </div>
      )}
    </div>
  );
};
