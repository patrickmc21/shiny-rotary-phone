import { fetchResidents } from '../fetchResidents.js';
import mockPlanetData from '../../mockData/planetData.js';
import mockPeopleData from '../../mockData/peopleData.js';

describe('fetchResidents', () => {

  let fetchCount;
  let endPoints;

  beforeEach(() => {
    fetchCount = -1;
    endPoints = mockPlanetData.results[0].residents;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          fetchCount++;
          return Promise.resolve(mockPeopleData.results[endPoints[fetchCount]]);
        }
      });
    });
  });

  it('calls fetch with correct params', () => {
    const expected = mockPlanetData.results[0].residents[0];
    fetchResidents(endPoints);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an array of resident names', async () => {
    const expected = ['Luke Skywalker', 'C-3PO', 'R2-D2'];
    const results = await fetchResidents(endPoints);
    expect(results).toEqual(expected);
  });

  it('should throw an error if fetch fails', async () => {
    let expected = [];
    for (let idx = 0; idx < endPoints.length; idx++) {
      expected.push(Error('response.json is not a function'));
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    const results = await fetchResidents(endPoints);
    expect(results).toEqual(expected);
  });
});