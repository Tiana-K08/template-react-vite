// --- Classic coding style (was the standard before React 17) ---
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// --- More modular, modern coding style ---
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// --- Both styles work the same but use different import approaches ---
// The first imports the entire React object, and its components are accessed via the namespace (e.g. React.StrictMode).
// The second imports only what's needed, keeping the code cleaner and a bit more efficient.
