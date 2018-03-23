import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Favorites = ({numberOfFavorites, activateCategory, activeCategoryName}) => {
  const className = 'favorites' === activeCategoryName ? 'favorites-button active' : 'favorites-button'
  return(
    <button
      className={className}
      onClick={() => activateCategory('favorites')}>
      Favorites
      <span className='favorites-counter'>{numberOfFavorites}</span>
    </button>
  )
}

Favorites.propTypes = {
  numberOfFavorites: PropTypes.number
}

export default Favorites;