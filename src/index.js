import React from 'react';
import ReactDOM from 'react-dom/client';
import 'katex/dist/katex.min.css';
import App from './App';

// Fix for KaTeX semantic layer showing alongside visual content
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
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
