import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UseState from './Context/state';

ReactDOM.render(
  <UseState>
    <App />
  </UseState>,
  document.getElementById('root')
);