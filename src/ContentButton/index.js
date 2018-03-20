import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ContentButton = ({buttonType}) => {
  return(
    <button 
      className='content-button'>
      {buttonType}
    </button>
  )
}

export default ContentButton;