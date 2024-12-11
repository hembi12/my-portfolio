// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // Aquí se inicializa i18n antes de montar App
import './index.css';
import reportWebVitals from './reportWebVitals';

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();