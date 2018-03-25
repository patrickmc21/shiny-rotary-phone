import { cleanPeople } from '../cleanPeople.js';
import peopleData from '../../mockData/peopleData.js';
import cleanPeopleMock from '../../mockData/cleanedPeopleData.js';
jest.mock('../fetchSpecies.js');
jest.mock('../fetchPlanet.js');


describe('cleanPeople', () => {

  let fetchReturn;
  let expected;

  beforeEach(() => {
    fetchReturn = peopleData.results;
    expected = cleanPeopleMock;
  });

  it('should return a cleaned array of 10 people', async () => {
    const cleanPeopleResult =  await cleanPeople(fetchReturn);
    expect(cleanPeopleResult).toEqual(expected);
  });
});

