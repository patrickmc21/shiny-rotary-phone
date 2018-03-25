import React from 'react';
import { shallow } from 'enzyme';
import Main from './index.js';

describe('Main', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render loading elements while api is fetching', () => {
    const wrapper = shallow(
      <Main
        activeCategoryInfo={[]}
        activeCategoryName={'people'}
        updateCurrentCategory={jest.fn()}
        addToFavorites={jest.fn()}
        favorites={[]}
        next={null}
        previous={null}
        loading={true}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the main page if no category selected', () => {
    const wrapper = shallow(
      <Main
        activeCategoryInfo={[]}
        activeCategoryName={'main'}
        updateCurrentCategory={jest.fn()}
        addToFavorites={jest.fn()}
        favorites={[]}
        next={null}
        previous={null}
        loading={false}/>);
    expect(wrapper).toMatchSnapshot();
  });
});