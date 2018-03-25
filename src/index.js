import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import apiFetchCalls from './api/apiFetchCalls.js';
import swapiCleaners from './dataCleaners/swapiCleaners.js';
import { BrowserRouter } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <App
      apiFetchCalls={apiFetchCalls}
      swapiCleaners={swapiCleaners}/>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
