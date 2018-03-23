import React from 'react';
import { shallow, mount } from 'enzyme';
import ContentButton from './index.js';

describe('ContentButton', () => {
  let wrapper;
  let mockButtonType;
  let mockActivateCategory;
  let mockActiveCategory;

  beforeEach( () => {
    mockButtonType = 'people';
    mockActivateCategory = jest.fn();
    mockActiveCategory = 'vehicles';
    wrapper = shallow(
      <ContentButton 
        buttonType={mockButtonType}
        activateCategory={mockActivateCategory}
        activateCategoryName={mockActiveCategory}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run activateCategory with correct params on click', () =>{
    const expected = mockButtonType;
    wrapper.find('.content-button').simulate('click');
    expect(mockActivateCategory).toHaveBeenCalledWith(expected)
  });

  it('add an active class if current category is the button type', () => {
    mockActiveCategory = 'people';
    wrapper = shallow(
      <ContentButton 
        buttonType={mockButtonType}
        activateCategory={mockActivateCategory}
        activeCategoryName={mockActiveCategory}/>);
    expect(wrapper).toMatchSnapshot();
  });
});