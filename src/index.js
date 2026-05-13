import React from 'react';
import ReactDOM from 'react-dom/client';
import 'katex/dist/katex.min.css';
import './design-tokens.css';
import './design/global.css';
import App from './App';
import DiagramPreview from './components/__DiagramPreview';

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
  /* Premium KaTeX typography polish (Global) */
  .katex .frac-line { border-bottom-width: 0.06em !important; }
  .katex-display { margin: 0.75em 0 !important; }
  /* Chat-specific sizing */
  .ai-coach-pane .katex {
    font-size: 1.05em;
    vertical-align: middle;
  }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
// Dev-only diagram preview: gated on URL hash; never reaches production users
// unless they hand-craft the hash. Cheap escape hatch for visual iteration.
const isDiagramPreview = typeof window !== 'undefined' && window.location.hash.startsWith('#__diag=');
root.render(
  <React.StrictMode>
    {isDiagramPreview ? <DiagramPreview /> : <App />}
  </React.StrictMode>
);
