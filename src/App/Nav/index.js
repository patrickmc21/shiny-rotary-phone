import React from 'react';
import ContentButton from './ContentButton/index.js';
import Favorites from './Favorites/index.js';
import PropTypes from 'prop-types';
import './styles.css';

const Nav = () => {
  return (
    <div>I'm the Nav
      <ContentButton />
      <Favorites />
    </div>
  )
}

export default Nav;