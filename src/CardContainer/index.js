import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from '../ContentCard/index.js';
import './styles.css';

const CardContainer = ({activeCategoryInfo, activeCategoryName, addToFavorites, favorites}) => {
  const Cards = activeCategoryInfo.map(categoryItem => {
    const buttonClass = favorites.find(favorite => favorite.name === categoryItem.name) ? 'active' : '';
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
      <h2>{activeCategoryName}</h2>
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