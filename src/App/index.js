import React, { Component } from 'react';
import Nav from './Nav/index.js';
import Scroll from './Scroll/index.js';
import Main from './Main/index.js';
import PropTypes from 'prop-types';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWapiBox</h1>
        </header>
        <Nav />
        <Scroll />
        <Main />
      </div>
    );
  }
}

export default App;
