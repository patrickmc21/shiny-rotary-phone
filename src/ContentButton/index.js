import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ContentButton = ({buttonType, activateCategory}) => {
  return(
    <button 
      className='content-button'
      onClick={() => activateCategory(buttonType)}>
      {buttonType}
    </button>
  )
}

ContentButton.propTypes = {
  buttonType: PropTypes.string,
  activateCategory: PropTypes.func
}

export default ContentButton;