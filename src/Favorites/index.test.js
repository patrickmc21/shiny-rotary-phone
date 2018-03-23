import React from 'react';
import { shallow, mount } from 'enzyme';
import Favorites from './index.js';

describe('Favorites', () => {

  let wrapper;
  let mockNumberOfFavorites;
  let mockActivateCategory;

  beforeEach(() => {
    mockNumberOfFavorites = 3;
    mockActivateCategory = jest.fn();
    wrapper = shallow(
      <Favorites 
        numberOfFavorites={mockNumberOfFavorites}
        activateCategory={mockActivateCategory}/>
    );
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();  
  })

  it('should invoke activateCategory prop on click', () => {
    const expected = 'favorites'; 
    wrapper.find('.favorites-button').simulate('click');
    expect(mockActivateCategory).toHaveBeenCalledWith(expected);
  })
})