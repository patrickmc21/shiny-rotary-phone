import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ContentButton = ({buttonType, activateCategory, activeCategoryName}) => {
  const className = buttonType === activeCategoryName ? 
    `content-button ${buttonType} active` 
    : `content-button ${buttonType}`;
  return (
    <button 
      className={className}
      onClick={() => activateCategory(buttonType)}>
    </button>
  );
};

ContentButton.propTypes = {
  buttonType: PropTypes.string,
  activateCategory: PropTypes.func,
  activeCategoryName: PropTypes.string
};

export default ContentButton;