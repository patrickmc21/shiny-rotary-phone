import React from 'react';
import CardContainer from './CardContainer/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Main = () => {
  return (
    <main className='App-Main'>
      <CardContainer />
    </main>

  )
}

Main.propTypes = {

};

export default Main;