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
    const buttonClass = favorites.find(favorite => {
      return favorite.name === categoryItem.name;
    }) ? 'favorite' : '';
    return (
      <ContentCard 
        key={categoryItem.name}
        categoryItem={categoryItem}
        activeCategoryName={activeCategoryName}
        addToFavorites={addToFavorites}
        buttonClass={buttonClass}/>
    );
  });
  return (
    <section className='Card-Container'>
      {next && 
        <button 
          className='next'
          onClick={() => updateCurrentCategory(activeCategoryName, `${next}`)}>
            Next
        </button>}
      {previous &&
        <button
          className='previous' 
          onClick={() => {
            updateCurrentCategory(activeCategoryName, `${previous}`);
          }}>
            Last
        </button>}
      <h2>{activeCategoryName !== 'main' && activeCategoryName}</h2>
      <div className='card-wrapper'>
        {Cards}
      </div>
    </section>
  );
};

CardContainer.propTypes = {
  activeCategoryInfo: PropTypes.array,
  activeCategoryName: PropTypes.string,
  updateCurrentCategory: PropTypes.func, 
  addToFavorites: PropTypes.func,
  favorites: PropTypes.array,
  next: PropTypes.string,
  previous: PropTypes.string
};

export default CardContainer;