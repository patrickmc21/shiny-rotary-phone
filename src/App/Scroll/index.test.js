import React from 'react';
import { shallow, mount } from 'enzyme';
import Scroll from './index.js';

describe('Scroll', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Scroll />);
    expect(wrapper).toMatchSnapshot();
  })
})