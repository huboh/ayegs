import './styles/index.scss';
import App from './App/index';
import React from 'react';
import ReactDOM from 'react-dom';

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));