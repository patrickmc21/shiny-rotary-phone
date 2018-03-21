import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Favorites = ({numberOfFavorites}) => {
  return(
    <button
      className='favorites-button'>
      Favorites
      <span className='favorites-counter'>{numberOfFavorites}</span>
    </button>
  )
}

Favorites.propTypes = {
  numberOfFavorites: PropTypes.number
}

export default Favorites;