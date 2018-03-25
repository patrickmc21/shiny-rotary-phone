import React from 'react';
import { shallow } from 'enzyme';
import Favorites from './index.js';

describe('Favorites', () => {

  let wrapper;
  let mockNumberOfFavorites;
  let mockActivateCategory;
  let mockActiveCategoryName;

  beforeEach(() => {
    mockNumberOfFavorites = 3;
    mockActiveCategoryName = 'people';
    mockActivateCategory = jest.fn();
    wrapper = shallow(
      <Favorites 
        numberOfFavorites={mockNumberOfFavorites}
        activateCategory={mockActivateCategory}
        activeCategoryName={mockActiveCategoryName}/>
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();  
  });

  it('should invoke activateCategory prop on click', () => {
    const expected = 'favorites'; 
    wrapper.find('.favorites-button').simulate('click');
    expect(mockActivateCategory).toHaveBeenCalledWith(expected);
  });

  it('should have an active class if favorites is selected', () => {
    mockActiveCategoryName = 'favorites';
    wrapper = shallow(<Favorites 
      numberOfFavorites={mockNumberOfFavorites}
      activateCategory={mockActivateCategory}
      activeCategoryName={mockActiveCategoryName}/>);
    expect(wrapper).toMatchSnapshot();
  });
});