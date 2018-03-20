import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Favorites = ({numberofFavorites}) => {
  return(
    <button
      className='favorites-button'>
      Favorites
      <span className='favorites-counter'>1</span>
    </button>
  )
}

export default Favorites;