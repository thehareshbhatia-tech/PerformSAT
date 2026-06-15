import React, { useEffect, useState } from 'react';
import './Modal.css';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  maxWidth = '500px',
  hideCloseButton = false,
  // When true, the modal cannot be dismissed (Escape, backdrop, X are inert)
  // and the dialog is marked aria-busy — for in-flight, non-cancelable work.
  disabled = false,
}) => {
  const [renderState, setRenderState] = useState(isOpen ? 'entering' : 'unmounted');

  useEffect(() => {
    if (isOpen) {
      setRenderState('entering');
      // RAF ensures the DOM element exists before adding the visible class for CSS transition
      const raf = requestAnimationFrame(() => {
        setRenderState('entered');
      });
      return () => cancelAnimationFrame(raf);
    } else {
      // Transition to exiting (unless already unmounted)
      setRenderState(prev => (prev === 'unmounted' ? 'unmounted' : 'exiting'));
      const timer = setTimeout(() => setRenderState('unmounted'), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]); // Only depend on isOpen — renderState in deps caused exit timer to be cancelled

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !disabled) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, disabled]);

  if (renderState === 'unmounted') return null;

  const isVisible = renderState === 'entered';

  return (
    <div className={`modal-backdrop ${isVisible ? 'is-visible' : ''}`} onClick={disabled ? undefined : onClose}>
      <div
        className={`modal-container ${isVisible ? 'is-visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth }}
        role="dialog"
        aria-modal="true"
        aria-busy={disabled || undefined}
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {(title || !hideCloseButton) && (
          <div className="modal-header">
            {title ? <h2 id="modal-title" className="modal-title">{title}</h2> : <div></div>}
            {!hideCloseButton && (
              <button
                className="modal-close-btn"
                onClick={disabled ? undefined : onClose}
                disabled={disabled}
                style={disabled ? { opacity: 0.5, cursor: 'default' } : undefined}
                aria-label="Close modal"
              >
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
