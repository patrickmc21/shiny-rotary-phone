import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import retrieveScroll from './helpers/retrieveScroll.js';


ReactDOM.render(<App retrieveScroll={retrieveScroll}/>, document.getElementById('root'));
