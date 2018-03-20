import React from 'react';
import App from './index.js';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    const mockFetch = jest.fn();
    const wrapper = shallow(<App retrieveScroll={mockFetch}/>);
    expect(wrapper).toMatchSnapshot();
  })
})