import React from 'react';
import CardContainer from '../CardContainer/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Main = ({activeCategoryInfo, activeCategoryName, addToFavorites, favorites}) => {
  return (
    <main className='App-Main'>
      <CardContainer 
        activeCategoryInfo={activeCategoryInfo}
        activeCategoryName={activeCategoryName}
        addToFavorites={addToFavorites}
        favorites={favorites}/>
    </main>

  )
}

Main.propTypes = {
  activeCategoryInfo: PropTypes.array,
  activeCategoryName: PropTypes.string,
  addToFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default Main;