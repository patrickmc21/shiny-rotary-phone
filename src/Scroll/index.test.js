import React from 'react';
import { shallow, mount } from 'enzyme';
import Scroll from './index.js';

describe('Scroll', () => {

  let mockScrollData;
  let wrapper;

  beforeEach(() => {
    mockScrollData = {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war..."
    }
    wrapper = shallow(<Scroll scrollData={mockScrollData}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})