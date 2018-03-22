import { fetchPlanet } from '../fetchPlanet.js';
import peopleData from '../../mockData/peopleData.js';
import planetsData from '../../mockData/planetData.js';

describe('fetchPlanet', () => {

  it('should take in raw person data and add Homeworld and Population to it', async () => {
    let fetchCalled = 0;
    const fetchReturn = peopleData.results;
    const expected = peopleData.results.map((person, index) => {
      person.Homeworld = planetsData.results[person.homeworld].name;
      person['Homeworld Population'] = planetsData.results[person.homeworld].population;
      return person;
    });
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          let promise;
          promise = Promise.resolve(planetsData.results[fetchReturn[fetchCalled].homeworld])
          fetchCalled++
          return promise;
        }
      })
    })

    const results = await fetchPlanet(fetchReturn);
    expect(results).toEqual(expected);
  })
})