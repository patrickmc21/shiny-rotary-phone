import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const Scroll = ({scrollData}) => {
  return (
    <aside className='scroll'>
      <article>
        <p>{scrollData.opening_crawl}</p>
        <h4>{scrollData.title}</h4>
        <time>{scrollData.release_date}</time>
      </article>
      <form>
        <input 
          type='text'
          name='user-name'
          placeholder='Enter Name'/>
        <Link to='/main'>
          <button>
            Proceed to SWapiBox
          </button>
        </Link>
      </form>
    </aside>
  )
}

Scroll.propTypes = {
  scrollData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Scroll;