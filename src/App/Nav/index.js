import React from 'react';
import ContentButton from './ContentButton/index.js';
import Favorites from './Favorites/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Nav = () => {
  return (
    <nav className='App-Nav'>
      <ContentButton buttonType='people'/>
      <ContentButton buttonType='planets'/>
      <ContentButton buttonType='vehicles'/>
      <Favorites />
    </nav>
  )
}

export default Nav;