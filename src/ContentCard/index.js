import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ContentCard = ({categoryItem, activeCategoryName, addToFavorites}) => {
  const catKeys = Object.keys(categoryItem);
  const cardContent = catKeys.filter(key => key !== 'name').map(item => {
    return <li key={item}>{item}: {categoryItem[item]}</li>
  })

  return(
    <article className='content-card'>
      <header>
        <h3>{categoryItem.name}</h3>
        <button className='favorite' onClick={() => addToFavorites(categoryItem)}>Favorite</button>
      </header>
      <ul>
        {cardContent}
      </ul>
    </article>
  )
};

ContentCard.propTypes = {
  categoryItem: PropTypes.object
}

export default ContentCard;