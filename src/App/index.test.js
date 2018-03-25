import React from 'react';
import App from './index.js';
import { shallow, mount } from 'enzyme';
import LocalStorage from '../mockData/mockLocalStorage.js';
import cleanedPeopleData from '../mockData/cleanedPeopleData.js';
import cleanedPlanetData from '../mockData/cleanedPlanetData.js';
import cleanedStarshipData from '../mockData/cleanedStarshipData.js';
import cleanedVehicleData from '../mockData/cleanedVehicleData.js';
describe('App', () => {

  let mockFetch;
  let mockCleaners;
  let wrapper;
  let mockScrollData;
  let mockPeopleData;
  let mockPlanetData;
  let mockStarshipData;
  let mockVehicleData;
  let mockFavorites;

  beforeEach(() => {
    window.localStorage = new LocalStorage();
    mockScrollData = {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war..."
    };
    mockPeopleData = cleanedPeopleData;
    mockPlanetData = cleanedPlanetData;
    mockStarshipData = cleanedStarshipData;
    mockVehicleData = cleanedVehicleData;
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
      people: jest.fn().mockImplementation(() => Promise.resolve(mockPeopleData)),
      vehicles: jest.fn().mockImplementation(() => Promise.resolve(mockVehicleData)),
      planets: jest.fn().mockImplementation(() => Promise.resolve(mockPlanetData)),
      starships: jest.fn().mockImplementation(() => Promise.resolve(mockStarshipData))
    };
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>);
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

  it('App should update favorites from localStorage if the app has been used before', () => {
    const mockUser = 'Pat';
    localStorage.setItem('lastActiveUser', mockUser);
    localStorage.setItem(mockUser, JSON.stringify(mockFavorites));
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>, {disableLifecycleMethods: true});
    const spy = jest.spyOn(wrapper.instance(), 'retrieveFavorites');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalledWith(mockUser);
  });

  it('App should not update favorites from localStorage if the app has never been used', () => {
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>, {disableLifecycleMethods: true});
    const spy = jest.spyOn(wrapper.instance(), 'retrieveFavorites');
    wrapper.instance().componentDidMount();
    expect(spy).not.toHaveBeenCalled();
  });

  it('userLogin should call retrieveUser with correct params if a former user visits', () => {
    const spy =  jest.spyOn(wrapper.instance(), 'retrieveUser');
    const mockName = 'Pat'
    window.localStorage.setItem('lastActiveUser', mockName);
    window.localStorage.setItem(mockName, JSON.stringify(mockFavorites));
    wrapper.instance().userLogin(mockName)
    expect(spy).toHaveBeenCalledWith(mockName);
  });

  it('userLogin should call addUser with correct params if a new user visits', () => {
    const spy =  jest.spyOn(wrapper.instance(), 'addUser');
    const mockName = 'Pat'
    wrapper.instance().userLogin(mockName)
    expect(spy).toHaveBeenCalledWith(mockName);
  });

  it('addUser should call localStorage.setItem twice', () => {
    const spy = jest.spyOn(window.localStorage, 'setItem');
    const expectedFavs = [];
    const expectedUser = 'Pat';
    wrapper.instance().addUser(expectedUser);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('addUser should reset the apps favorites for a new user', () => {
    const expectedFavs = [];
    const expectedUser = 'Pat';
    wrapper.instance().addUser(expectedUser);
    expect(wrapper.state('favorites')).toEqual(expectedFavs);
    expect(wrapper.state('currentUser')).toEqual(expectedUser);
  });

  it('retrieveUser should call localStorage with correct params', () => {
    const expected = 'Pat';
    window.localStorage.setItem(expected, JSON.stringify(mockFavorites));
    const spyGet = jest.spyOn(window.localStorage, 'getItem');
    wrapper.instance().retrieveUser(expected);
    expect(spyGet).toHaveBeenCalledWith(expected);
  });

  it('retrieveUser should update state of favorites and currentUser', () => {
    const expectedUser = 'Pat';
    const expectedFavs = mockFavorites;
    window.localStorage.setItem(expectedUser, JSON.stringify(expectedFavs));
    wrapper.instance().retrieveUser(expectedUser);
    expect(wrapper.state('currentUser')).toEqual(expectedUser);
    expect(wrapper.state('favorites')).toEqual(expectedFavs);
  })

  it('userLogOut should reset the currentUser', () => {
    const expected = '';
    wrapper.setState({currentUser: 'Pat'});
    wrapper.instance().userLogOut();
    expect(wrapper.state('currentUser')).toEqual(expected);
  });

  it('retrieveFavorites should update the favorites from localStorage', () => {
    const expected = mockFavorites;
    const mockName = 'Pat';
    window.localStorage.setItem(mockName, JSON.stringify(mockFavorites));
    wrapper.instance().retrieveFavorites(mockName);
    expect(wrapper.state('favorites')).toEqual(expected);
  });

  it('retrieveFavorites should update the currentUser', () => {
    const mockName = 'Pat';
    window.localStorage.setItem(mockName, JSON.stringify(mockFavorites));
    wrapper.instance().retrieveFavorites(mockName);
    expect(wrapper.state('currentUser')).toEqual(mockName);
  });

  it('activateCategory should change the activated category to true in state', () => {
    mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockPeopleData))
    const expectedCategory = {
      people: true,
      vehicles: false,
      planets: false,
      starships: false,
      favorites: false
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
    mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockPeopleData));
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>)
    wrapper.instance().updateCurrentCategory('people');
    expect(mockFetch).toHaveBeenCalled();
  });

  it('updateCurrentCategory should change the active category info', () => {
    mockFetch = jest.fn().mockImplementation(() => Promise.resolve(mockPeopleData));
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>);
    const expected = mockPeopleData;
    new Promise((resolve) => {
      resolve(wrapper.instance().updateCurrentCategory('people'))
    })
      .then(() => wrapper.update())
      .then(() => wrapper.update())
      .then(() => expect(wrapper.state().activeCategoryInfo).toEqual(expected))
  });

  it('updateCurrentCategory should change category to favorites if favorites button is clicked', () => {
    const expected = mockFavorites;
    wrapper.setState({favorites: mockFavorites});
    wrapper.instance().updateCurrentCategory('favorites');
    expect(wrapper.state().activeCategoryInfo).toEqual(expected);
  });

  it('updateCurrentCategory should throw an error on bad fetch', () => {
    const expected = 'An error has occured';
    mockFetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'An error has occured'
      })
    });
    wrapper = shallow(
      <App 
        apiFetchCalls={mockFetch}
        swapiCleaners={mockCleaners}/>);
    new Promise((resolve) => {
      resolve(wrapper.instance().updateCurrentCategory('planets'))
    })
      .then(() => wrapper.update())
      .then(() => wrapper.update())
      .then(() => wrapper.update())
      .then(() => wrapper.update())
      .then(() => expect(wrapper.state('errorStatus')).toEqual(expected))
  });

  it('addToFavorites should add a card info object to favorites', () => {
    const expected = cleanedPeopleData[0]
    wrapper.instance().addToFavorites(mockPeopleData[0]);
    expect(wrapper.state().favorites).toEqual([expected])

  });

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
  });


  it('cleanEndPoint should take in a full endPoint and return the last portion', () => {
    const inputCategory = 'people'
    const inputEndPoint = "https://swapi.co/api/people/?page=2";
    const expected = "?page=2";
    const result = wrapper.instance().cleanEndPoint(inputCategory, inputEndPoint);
    expect(result).toEqual(expected);
  })

});