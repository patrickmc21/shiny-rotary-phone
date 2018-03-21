import React from 'react';
import CardContainer from '../CardContainer/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Main = ({activeCategoryInfo, activeCategoryName}) => {
  return (
    <main className='App-Main'>
      <CardContainer 
        activeCategoryInfo={activeCategoryInfo}
        activeCategoryName={activeCategoryName}/>
    </main>

  )
}

Main.propTypes = {
  activeCategoryInfo: PropTypes.array,
  activeCategoryName: PropTypes.string
};

export default Main;