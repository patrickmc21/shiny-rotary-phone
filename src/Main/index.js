import React from 'react';
import CardContainer from '../CardContainer/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Main = ({activeCategoryInfo, activeCategoryName, addToFavorites}) => {
  return (
    <main className='App-Main'>
      <CardContainer 
        activeCategoryInfo={activeCategoryInfo}
        activeCategoryName={activeCategoryName}
        addToFavorites={addToFavorites}/>
    </main>

  )
}

Main.propTypes = {
  activeCategoryInfo: PropTypes.array,
  activeCategoryName: PropTypes.string
};

export default Main;