import React from 'react';
import CardContainer from '../CardContainer/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Main = (props) => {
  const {
    activeCategoryInfo, 
    activeCategoryName,
    updateCurrentCategory, 
    addToFavorites, 
    favorites,
    next,
    previous,
  } = props;

  return (
    <main className='App-Main'>
      <CardContainer 
        activeCategoryInfo={activeCategoryInfo}
        activeCategoryName={activeCategoryName}
        addToFavorites={addToFavorites}
        favorites={favorites}
        updateCurrentCategory={updateCurrentCategory}
        next={next}
        previous={previous}/>
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