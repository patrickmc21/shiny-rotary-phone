import React from 'react';
import { shallow, mount } from 'enzyme';
import ContentCard from './index.js';

describe('ContentCard', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<ContentCard />);
    expect(wrapper).toMatchSnapshot();
  })
})