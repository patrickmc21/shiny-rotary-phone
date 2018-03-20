import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from './index.js';

describe('Main', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  })
})