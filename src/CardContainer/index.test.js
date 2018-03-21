import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './index.js';

describe('CardContainer', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<CardContainer />);
    expect(wrapper).toMatchSnapshot();
  })
})