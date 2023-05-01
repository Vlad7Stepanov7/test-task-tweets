import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="Vlad7Stepanov7/test-task-tweets" >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
