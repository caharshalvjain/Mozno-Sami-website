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
  const loader = document.getElementById('loader-3d');
  if (loader) loader.classList.add('hide');
  document.body.style.overflow = 'auto';
}, 2800);
