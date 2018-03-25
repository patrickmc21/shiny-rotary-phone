import { fetchSpecies } from '../fetchSpecies.js';
import peopleData from '../../mockData/peopleData.js';
import planetsData from '../../mockData/planetData.js';
import speciesData from '../../mockData/speciesData.js';
import cleanPeopleMock from '../../mockData/cleanedPeopleData.js';

describe('fetchSpecies', () => {

  let fetchCalled;
  let inputData;

  beforeEach(() => {
    fetchCalled = 0;
    inputData = peopleData.results
    inputData.forEach((person, index) => {
      person.Homeworld = cleanPeopleMock[index].Homeworld;
      person['Homeworld Population'] = planetsData.results[peopleData.results[index].homeworld].population;
    });
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          fetchCalled++;
          return Promise.resolve(speciesData.results[peopleData.results[fetchCalled - 1].species])
        }
      })
    });
  });

  it('calls fetch with correct params', () => {
    const expected = peopleData.results[0].species;
    fetchSpecies(inputData);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  it('should take in raw person data w/ planet info and return a cleaned person dataset', async () => {
    const expected = cleanPeopleMock
    const result = await fetchSpecies(inputData);
    expect(result).toEqual(expected);
  });

  it('should throw an error if fetch fails', async () => {
    let expected = [];
    for (let i = 0; i < 10; i++) {
      expected.push(Error('fetch species failed'))
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    const results = await fetchSpecies(inputData);
    expect(results).toEqual(expected);

  })
})