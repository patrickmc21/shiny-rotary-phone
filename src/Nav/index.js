import React from 'react';
import { Link } from 'react-router-dom';
import ContentButton from '../ContentButton/index.js';
import Favorites from '../Favorites/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Nav = (
  {
    activateCategory, 
    buttonType, 
    numberOfFavorites, 
    activeCategoryName}) => {

  const buttonsWithoutFavs = buttonType.filter(button =>  {
    return button !== 'favorites';
  });
  const buttons = buttonsWithoutFavs.map(button => {
    return (
      <Link to={`/${button}`} key={button} className='link'>
        <ContentButton 
          buttonType={button}
          activateCategory={activateCategory}
          activeCategoryName={activeCategoryName} />
      </Link>
    );
  });
  return (
    <nav className='App-Nav'>
      {buttons}
      <Link to='/favorites' className='link'>
        <Favorites 
          numberOfFavorites={numberOfFavorites}
          activateCategory={activateCategory}
          activeCategoryName={activeCategoryName}/>
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  activateCategory: PropTypes.func,
  buttonType: PropTypes.array,
  numberOfFavorites: PropTypes.number,
  activeCategoryName: PropTypes.string
};

export default Nav;