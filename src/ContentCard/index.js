import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ContentCard = ({categoryItem, activeCategoryName, addToFavorites, buttonClass}) => {
  const catKeys = Object.keys(categoryItem);
  const cardContent = catKeys.filter(key => key !== 'name').map(item => {
    return <li key={item}>{item}: {categoryItem[item]}</li>
  })

  return(
    <article className={`content-card ${activeCategoryName} ${buttonClass}`}>
      <header>
        <button 
          className={`favorite-btn ${buttonClass}`} 
          onClick={() => addToFavorites(categoryItem)}></button>
        <h3>{categoryItem.name}</h3>
      </header>
      <ul>
        {cardContent}
      </ul>
    </article>
  )
};

ContentCard.propTypes = {
  categoryItem: PropTypes.object,
  activeCategoryName: PropTypes.string,
  addToFavorites: PropTypes.func,
  buttonClass: PropTypes.string
}

export default ContentCard;