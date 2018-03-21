import React from 'react';
import { shallow, mount } from 'enzyme';
import ContentButton from './index.js';

describe('ContentButton', () => {
  let wrapper;
  let mockButtonType;
  let mockActivateCategory;

  beforeEach( () => {
    mockButtonType = 'people';
    mockActivateCategory = jest.fn();
    wrapper = shallow(
      <ContentButton 
        buttonType={mockButtonType}
        activateCategory={mockActivateCategory}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should run activateCategory with correct params on click', () =>{
    const expected = mockButtonType;
    wrapper.find('.content-button').simulate('click');
    expect(mockActivateCategory).toHaveBeenCalledWith(expected)
  })
})