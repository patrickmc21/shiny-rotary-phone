import { fetchResidents } from '../fetchResidents.js';
import mockPlanetData from '../../mockData/planetData.js';
import mockPeopleData from '../../mockData/peopleData.js';


describe('fetchResidents', () => {

  it('should take in an array of endpoints and return an array of resident names', async () => {
    let fetchCount = -1;
    const expected = ['Luke Skywalker', 'C-3PO', 'R2-D2'];
    const endPoints = mockPlanetData.results[0].residents;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          fetchCount++
          return Promise.resolve(mockPeopleData.results[endPoints[fetchCount]])
        }
      })
    })
    const results = await fetchResidents(endPoints);
    expect(results).toEqual(expected);
  })
})