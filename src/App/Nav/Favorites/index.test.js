import React from 'react';
import { shallow, mount } from 'enzyme';
import Favorites from './index.js';

describe('Favorites', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Favorites />);
    expect(wrapper).toMatchSnapshot();  
  })
})