import React from 'react';
import ReactDOM from 'react-dom/client';
import 'katex/dist/katex.min.css';
import './design-tokens.css';
import './design/global.css';
import App from './App';

// Global KaTeX style fixes
const style = document.createElement('style');
style.textContent = `
  .katex-mathml {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden !important;
  }
  /* Premium KaTeX rendering inside chat bubbles */
  .ai-coach-pane .katex {
    font-size: 1.05em;
    vertical-align: middle;
  }
  .ai-coach-pane .katex .frac-line { border-bottom-width: 0.06em !important; }
  .ai-coach-pane .katex-display { margin: 0.75em 0; }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
