import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './index.js';

describe('Scroll', () => {

  let mockScrollData;
  let mockUserLogin;
  let mockLastUser;
  let wrapper;

  beforeEach(() => {
    mockLastUser = 'Pat';
    mockUserLogin = jest.fn();
    mockScrollData = {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war..."
    };
    wrapper = shallow(
      <Scroll 
        scrollData={mockScrollData}
        userLogin={mockUserLogin}
        lastUser={mockLastUser}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change its name state on handleChange', () => {
    const event = {target: {value: 'Pat'}};
    wrapper.instance().handleChange(event);
    expect(wrapper.state('name')).toEqual('Pat');
  });

  it('should call userLogin with correct params', () => {
    const expected = 'Pat';
    wrapper.setState({name: expected});
    wrapper.instance().enterName();
    expect(mockUserLogin).toHaveBeenCalledWith(expected);
  });

  it('should call prop userLogin with correct params', () => {
    const expected = mockLastUser;
    wrapper.instance().lastUser();
    expect(mockUserLogin).toHaveBeenCalledWith(expected);
  });

  it('should change the notUser state to true on running changeUser', () => {
    wrapper.instance().changeUser();
    expect(wrapper.state('notUser')).toEqual(true);
  });

  it('should match the snapshot after running changeUser', () => {
    wrapper.instance().changeUser();
    expect(wrapper).toMatchSnapshot();
  });
});