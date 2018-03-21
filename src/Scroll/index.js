import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Scroll = ({scrollData}) => {
  return (
    <aside className='scroll'>
      <article>
        <p>{scrollData.opening_crawl}</p>
        <h4>{scrollData.title}</h4>
        <time>{scrollData.release_date}</time>
      </article>
    </aside>
  )
}

Scroll.propTypes = {
  scrollData: PropTypes.string
}

export default Scroll;