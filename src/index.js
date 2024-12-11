import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // Aquí se inicializa i18n antes de montar App
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
