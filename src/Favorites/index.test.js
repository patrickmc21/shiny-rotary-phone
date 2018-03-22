import React from 'react';
import { shallow, mount } from 'enzyme';
import Favorites from './index.js';

describe('Favorites', () => {

  let wrapper;
  let mockNumberOfFavorites;

  beforeEach(() => {
    mockNumberOfFavorites = 3;
    wrapper = shallow(
      <Favorites numberOfFavorites={mockNumberOfFavorites}/>
    );
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();  
  })
})