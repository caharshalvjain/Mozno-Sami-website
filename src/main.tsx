// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* ---- Scroll & Loader Fix ---- */
setTimeout(() => {
  // hide the 3-D pre-loader
  const loader = document.getElementById('loader-3d');
  if (loader) loader.classList.add('hide');

  // force the body to scroll
  document.body.style.overflow = 'auto';
}, 2800); // match your loader fade-out time
