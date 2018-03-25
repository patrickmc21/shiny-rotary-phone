import { cleanStarships } from '../cleanStarships.js';
import mockStarShipData from '../../mockData/starshipData.js';
import cleanStarshipData from '../../mockData/cleanedStarshipData.js';

describe('cleanStarships', () => {

  it('should take in raw starship data and return a cleaned array of objects', async () => {
    const mockFetchReturn = mockStarShipData.results;
    const expected = cleanStarshipData;
    const results = await cleanStarships(mockFetchReturn);
    expect(results).toEqual(expected);
  })
})