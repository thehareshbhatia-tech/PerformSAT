import React, { useEffect, useState } from 'react';
import './Modal.css';

export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer, 
  maxWidth = '500px',
  hideCloseButton = false 
}) => {
  const [renderState, setRenderState] = useState(isOpen ? 'entering' : 'unmounted');

  useEffect(() => {
    if (isOpen) {
      setRenderState('entering');
      // small delay to allow display:block before adding opacity/transform classes
      requestAnimationFrame(() => setRenderState('entered'));
    } else if (renderState === 'entered') {
      setRenderState('exiting');
      const timer = setTimeout(() => setRenderState('unmounted'), 300); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, renderState]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (renderState === 'unmounted') return null;

  const isVisible = renderState === 'entered';

  return (
    <div className={`modal-backdrop ${isVisible ? 'is-visible' : ''}`} onClick={onClose}>
      <div 
        className={`modal-container ${isVisible ? 'is-visible' : ''}`} 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {(title || !hideCloseButton) && (
          <div className="modal-header">
            {title ? <h2 id="modal-title" className="modal-title">{title}</h2> : <div></div>}
            {!hideCloseButton && (
              <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        )}
        
        <div className="modal-content">
          {children}
        </div>

        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
