import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from '../ContentCard/index.js';
import './styles.css';

const CardContainer = ({activeCategoryInfo, activeCategoryName}) => {
  const Cards = activeCategoryInfo.map(categoryItem => {
    return (
      <ContentCard 
        key={categoryItem.name}
        categoryItem={categoryItem}
        activeCategoryName={activeCategoryName}/>
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
  activeCategory: PropTypes.array
};

export default CardContainer;