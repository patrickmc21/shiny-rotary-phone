import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ContentButton = ({buttonType, activateCategory, activeCategoryName}) => {
  const className = buttonType === activeCategoryName ? 'content-button active' : 'content-button'
  return(
    <button 
      className={className}
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