import React from 'react';
import PropTypes from 'prop-types';
import ContentCard from './ContentCard/index.js';
import './styles.css';

const CardContainer = () => {
  const array = [];
  for (let i =0; i< 100; i++) {
    array.push(i);
  }

  const Cards = array.map(num => <ContentCard />)
  return(
    <section className='Card-Container'>
      {Cards}
    </section>
  )
}

export default CardContainer;