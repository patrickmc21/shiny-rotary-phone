import React from 'react';
import Nav from './index.js';
import { shallow, mount } from 'enzyme';

describe('Nav', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  })
})