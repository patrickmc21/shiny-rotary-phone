import React from 'react';
import { shallow, mount } from 'enzyme';
import ContentButton from './index.js';

describe('ContentButton', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<ContentButton />);
    expect(wrapper).toMatchSnapshot();
  })
})