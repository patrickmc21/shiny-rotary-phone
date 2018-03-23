import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './index.js';

describe('CardContainer', () => {

  let wrapper;
  let mockCategoryInfo;
  let mockActiveCategoryName;
  let mockAddToFavorites;
  let mockFavorites;

  beforeEach(() => {
    mockActiveCategoryName = 'people';
    mockAddToFavorites = jest.fn();
    mockCategoryInfo = [
      {
        name: 'Han Solo',
        Homeworld: 'Corellia',
        'Homeworld Population': 10000,
        Species: 'human'
      },
      {
        name: 'Boba Fett',
        Homeworld: 'Kamino',
        'Homeworld Population': 100,
        Species: 'human'
      }
    ];
    mockFavorites = [
      {
        name: 'Han Solo',
        Homeworld: 'Corellia',
        'Homeworld Population': 10000,
        Species: 'human'
      }
    ];
    wrapper = shallow(
      <CardContainer 
        activeCategoryInfo={mockCategoryInfo}
        activeCategoryName={mockActiveCategoryName}
        addToFavorites={mockAddToFavorites}
        favorites={mockFavorites}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should give a card an favorite class if content is in favorites', () => {
    const expected = 'favorite';
    expect(wrapper.find('ContentCard').first().props().buttonClass).toEqual(expected)
  })

})