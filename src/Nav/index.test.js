import React from 'react';
import Nav from './index.js';
import { shallow } from 'enzyme';

describe('Nav', () => {

  let wrapper;
  let mockActivateCategory;
  let mockButtonType;
  let mockNumberOfFavorites;

  beforeEach(() => {
    mockNumberOfFavorites = 3;
    mockActivateCategory = jest.fn();
    mockButtonType = ['people', 'vehicles', 'planets'];
    wrapper = shallow(
      <Nav 
        activateCategory={mockActivateCategory}
        buttonType={mockButtonType}
        numberOfFavorites={mockNumberOfFavorites}/>);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});