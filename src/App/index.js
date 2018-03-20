import React, { Component } from 'react';
import Nav from './Nav/index.js';
import Scroll from './Scroll/index.js';
import Main from './Main/index.js';
import PropTypes from 'prop-types';
import retrieveScroll from './helpers/retrieveScroll.js';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollData: ''
    }
  }

  componentDidMount() {
    this.fetchScroll()
  }

  fetchScroll = () => {
    retrieveScroll()
      .then(response => response.json())
      .then(scrollData=> this.setState({scrollData}))
      .catch(error => console.log(error))
    console.log('Mounted!')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWapiBox</h1>
        </header>
        <Scroll scrollData={this.state.scrollData.opening_crawl}/>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
