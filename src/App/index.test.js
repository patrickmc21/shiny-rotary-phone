import React from 'react';
import App from './index.js';
import { shallow, mount } from 'enzyme';

describe('App', () => {

  let mockFetch;
  let mockCleaners;
  let wrapper;
  let mockScrollData;
  let mockCategoryData;
  let mockFavorites;

  beforeEach(() => {
    mockScrollData = {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war..."
    };
    mockCategoryData = [
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
    mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockScrollData));
    mockCleaners = {
      people: jest.fn().mockImplementation(() => Promise.resolve(mockCategoryData)),
      vehicles: jest.fn(),
      planets: jest.fn()
    };
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('fetchScroll should call apiFetchCalls', () => {
    wrapper.instance().fetchScroll();
    expect(mockFetch).toHaveBeenCalled();
  });

  it('fetchScroll should return a movie crawl', () => {
    const expected = mockScrollData;
    wrapper.instance().fetchScroll();
    expect(wrapper.state('scrollData')).toEqual(expected);
  });

  it('fetchScroll should add a state key of errorStatus on failed fetch', () => {
    mockFetch = jest.fn().mockImplementation(() => Promise.reject({
      message: 'An error has occured'
    }));
    const expected = 'An error has occured';
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>)   
    new Promise((resolve) => {
      resolve(() => wrapper.instance().fetchScroll())
    })
      .then(() => wrapper.update())
      .then(() => wrapper.update())
      .then(() => expect(wrapper.state().errorStatus).toEqual(expected))
  });

  it('activateCategory should change the activated category to true in state', () => {
    mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockCategoryData))
    const expectedCategory = {
      people: true,
      vehicles: false,
      planets: false
    };
    const expectedName = 'people';
    wrapper.instance().activateCategory('people');
    expect(wrapper.state('categories')).toEqual(expectedCategory);
    expect(wrapper.state('activeCategoryName')).toEqual(expectedName)
  });

  it('activateCategory should call updateCurrentCategory', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateCurrentCategory');
    const expected = 'people';
    wrapper.instance().activateCategory('people');
    expect(spy).toHaveBeenCalledWith(expected);
  });

  it('updateCurrentCategory should call apiFetchCalls', () => {
    mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockCategoryData));
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>)
    wrapper.instance().updateCurrentCategory('people');
    expect(mockFetch).toHaveBeenCalled();
  });

  it('updateCurrentCategory should change the active category info', () => {
    mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockCategoryData));
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>);
    const expected = mockCategoryData;
    new Promise((resolve) => {
      resolve(wrapper.instance().updateCurrentCategory('people'))
    })
      .then(() => wrapper.update())
      .then(() => expect(wrapper.state().activeCategoryInfo).toEqual(expected))
  });

  it('addToFavorites should add a card info object to favorites', () => {
    const expected = {
        name: 'Han Solo',
        Homeworld: 'Corellia',
        'Homeworld Population': 10000,
        Species: 'human'
      };
    wrapper.instance().addToFavorites(mockCategoryData[0]);
    expect(wrapper.state().favorites).toEqual([expected])

  })

  it('addToFavorites should not add an existing favorited object into favorites', () => {
    const clickedCard = {
        name: 'Han Solo',
        Homeworld: 'Corellia',
        'Homeworld Population': 10000,
        Species: 'human'
      };
    wrapper.setState({favorites: mockFavorites});
    wrapper.instance().addToFavorites(clickedCard);
    expect(wrapper.state().favorites.length).not.toEqual(2);
  })

  it('addToFavorites should remove an existing favorite if clicked again', () => {
    const clickedCard = {
        name: 'Han Solo',
        Homeworld: 'Corellia',
        'Homeworld Population': 10000,
        Species: 'human'
      };
    wrapper.setState({favorites: mockFavorites});
    wrapper.instance().addToFavorites(clickedCard);
    expect(wrapper.state().favorites).toEqual([]);
  })

});