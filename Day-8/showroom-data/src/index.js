import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/app/App';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "bootstrap-icons/font/bootstrap-icons.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


