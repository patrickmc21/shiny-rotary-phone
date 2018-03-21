import React from 'react';
import ContentButton from '../ContentButton/index.js';
import Favorites from '../Favorites/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Nav = ({activateCategory, buttonType, numberOfFavorites}) => {
  const buttons = buttonType.map(button => {
    return (
      <ContentButton
        key={button} 
        buttonType={button}
        activateCategory={activateCategory} />
    )
  })
  return (
    <nav className='App-Nav'>
      {buttons}
      <Favorites numberOfFavorites={numberOfFavorites}/>
    </nav>
  )
}

Nav.propTypes = {
  activateCategory: PropTypes.func,
  buttonType: PropTypes.array,
  numberOfFavorites: PropTypes.number
}

export default Nav;