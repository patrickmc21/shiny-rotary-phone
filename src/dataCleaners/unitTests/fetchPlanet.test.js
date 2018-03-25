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
          let hmewrld = planetsData.results[fetchReturn[fetchCalled].homeworld];
          promise = Promise.resolve(hmewrld);
          fetchCalled++;
          return promise;
        }
      });
    });
  });

  it('calls fetch with the correct params', () => {
    const expected = peopleData.results[0].homeworld;
    fetchPlanet(fetchReturn);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should add Homeworld and Population to person data', async () => {
    const expected = peopleData.results.map((person) => {
      person.Homeworld = planetsData.results[person.homeworld].name;
      const pop = planetsData.results[person.homeworld].population;
      person['Homeworld Population'] = pop;
      return person;
    });

    const results = await fetchPlanet(fetchReturn);
    expect(results).toEqual(expected);
  });

  it('should throw an error if the fetch fails', async () => {
    let expected = [];
    for (let idx = 0; idx < 10; idx++) {
      expected.push(Error('response.json is not a function'));
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    const result = await fetchPlanet(fetchReturn);
    expect(result).toEqual(expected);
  });
});