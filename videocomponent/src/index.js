import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './App.css';
import App from './App';

// Create a root for rendering
const container = document.getElementById('root');
const root = createRoot(container);

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
