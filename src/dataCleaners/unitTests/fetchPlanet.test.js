import { fetchPlanet } from '../fetchPlanet.js';
import peopleData from '../../mockData/peopleData.js';
import planetsData from '../../mockData/planetData.js';

describe('fetchPlanet', () => {

  let fetchReturn;
  let fetchCalled;

  beforeEach(() => {
    fetchCalled = 0;
    fetchReturn = peopleData.results;
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
    });
  })

  it('calls fetch with the correct params', () => {
    const expected = peopleData.results[0].homeworld;
    fetchPlanet(fetchReturn);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  it('should take in raw person data and add Homeworld and Population to it', async () => {
    const expected = peopleData.results.map((person, index) => {
      person.Homeworld = planetsData.results[person.homeworld].name;
      person['Homeworld Population'] = planetsData.results[person.homeworld].population;
      return person;
    });

    const results = await fetchPlanet(fetchReturn);
    expect(results).toEqual(expected);
  })

  it('should throw an error if the fetch fails', async () => {
    let expected = [];
    for (let i = 0; i < 10; i++) {
      expected.push(Error('fetch planet failed'))
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    const result = await fetchPlanet(fetchReturn);
    expect(result).toEqual(expected);
  })
})