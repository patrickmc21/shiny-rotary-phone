import { cleanPlanets } from '../cleanPlanets.js';
import mockPlanetData from '../../mockData/planetData.js';
import cleanedPlanetData from '../../mockData/cleanedPlanetData.js';
jest.mock('../fetchResidents.js');

describe('cleanPlanets', () => {

  it('should take in raw planets data and return a cleaned array of planet info', async () => {
    const fetchReturn = mockPlanetData.results;
    const expected = cleanedPlanetData;
    const results = await cleanPlanets(fetchReturn);
    expect(results).toEqual(expected);
  })
})