import { cleanPeople } from '../cleanPeople.js';
import { fetchPlanet } from '../fetchPlanet.js';
import { fetchSpecies } from '../fetchSpecies.js';
import peopleData from '../../mockData/peopleData.js';
import cleanPeopleMock from '../../mockData/cleanedPeopleData.js';
jest.mock('../fetchSpecies.js');
jest.mock('../fetchPlanet.js');


describe('cleanPeople', () => {

  it('should return a cleaned array of 10 people', () => {
    const fetchReturn = peopleData.results;
    const expected = cleanPeopleMock;
    const cleanPeopleResult = cleanPeople(fetchReturn);
    expect(cleanPeopleResult).toEqual(expected);
  });
})

