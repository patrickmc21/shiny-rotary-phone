import React from 'react';
import { shallow } from 'enzyme';
import ContentCard from './index.js';

describe('ContentCard', () => {
  let mockCategoryItem;
  let mockAddToFavorites;
  let mockButtonClass;
  let mockCategoryName;
  let wrapper;

  beforeEach( () => {
    mockCategoryItem = {
      name: 'Chewbacca',
      Homeworld: 'Kashyyk',
      'Homeworld Population': 1000010,
      Species: 'Wookie'
    };
    mockCategoryName = 'people';
    mockAddToFavorites = jest.fn();
    mockButtonClass = '';
    wrapper = shallow(
      <ContentCard 
        categoryItem={mockCategoryItem}
        activeCategoryName={mockCategoryName}
        addToFavorites={mockAddToFavorites}
        buttonClass={mockButtonClass}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should run addToFavorites on click with correct params', () => {
    wrapper.find('.favorite-btn').simulate('click');
    expect(mockAddToFavorites).toHaveBeenCalledWith(mockCategoryItem);
  });
});