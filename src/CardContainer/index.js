import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from '../ContentCard/index.js';
import './styles.css';

const CardContainer = (props) => {
  const {
    activeCategoryInfo, 
    activeCategoryName, 
    addToFavorites, 
    favorites,
    updateCurrentCategory,
    next,
    previous
  } = props;

  const Cards = activeCategoryInfo.map(categoryItem => {
    const buttonClass = favorites.find(favorite => favorite.name === categoryItem.name) ? 'favorite' : '';
    return (
      <ContentCard 
        key={categoryItem.name}
        categoryItem={categoryItem}
        activeCategoryName={activeCategoryName}
        addToFavorites={addToFavorites}
        buttonClass={buttonClass}/>
    )
  })
  return(
    <section className='Card-Container'>
      {next && 
        <button 
          onClick={() => updateCurrentCategory(activeCategoryName, `${next}`)}>
            Next
        </button>}
        {previous &&
          <button 
          onClick={() => updateCurrentCategory(activeCategoryName, `${previous}`)}>
            Previous
        </button>}
      <h2>{activeCategoryName !== 'main' && activeCategoryName}</h2>
      {Cards}
    </section>
  )
}

CardContainer.propTypes = {
  activeCategory: PropTypes.array,
  activeCategoryName: PropTypes.string,
  addToFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default CardContainer;