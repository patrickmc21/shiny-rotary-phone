import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import apiFetchCalls from './api/apiFetchCalls.js';
import swapiCleaners from './dataCleaners/swapiCleaners.js';

ReactDOM.render(
  <App 
    apiFetchCalls={apiFetchCalls}
    swapiCleaners={swapiCleaners}/>, 
  document.getElementById('root'));
