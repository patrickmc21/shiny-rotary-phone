import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Scroll = ({scrollData}) => {
  return (
    <aside className='scroll'>
      <article>
        {scrollData}
      </article>
    </aside>
  )
}

export default Scroll;