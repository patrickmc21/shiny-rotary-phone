import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './index.js';

describe('CardContainer', () => {

  let wrapper;
  let mockCategoryInfo;
  let mockActiveCategoryName;
  let mockAddToFavorites;
  let mockFavorites;
  let mockUpdateCategory;
  let mockNext;
  let mockPrevious;

  beforeEach(() => {
    mockNext = 'next';
    mockPrevious = 'previous';
    mockActiveCategoryName = 'people';
    mockAddToFavorites = jest.fn();
    mockUpdateCategory = jest.fn();
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
        favorites={mockFavorites}
        updateCurrentCategory={mockUpdateCategory}
        next={mockNext}
        previous={mockPrevious}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should give a card an favorite class if content is in favorites', () => {
    const expected = 'favorite';
    expect(wrapper.find('ContentCard').first().props().buttonClass).toEqual(expected)
  });

  it('next button should run updateCurrentCategory with correct params', () => {
    wrapper.find('.next').simulate('click');
    expect(mockUpdateCategory).toHaveBeenCalledWith(mockActiveCategoryName, mockNext)
  });

  it('previous button should run updateCurrentCategory with correct params', () => {
    wrapper.find('.previous').simulate('click');
    expect(mockUpdateCategory).toHaveBeenCalledWith(mockActiveCategoryName, mockPrevious)
  });

})