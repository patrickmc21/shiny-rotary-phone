import { fetchSpecies } from '../fetchSpecies.js';
import peopleData from '../../mockData/peopleData.js';
import planetsData from '../../mockData/planetData.js';
import speciesData from '../../mockData/speciesData.js';
import cleanPeopleMock from '../../mockData/cleanedPeopleData.js';

describe('fetchSpecies', () => {

  it('should take in raw person data w/ planet info and return a cleaned person dataset', async () => {
    let fetchCalled = 0;
    const expected = cleanPeopleMock
    const inputData = peopleData.results
    inputData.forEach((person, index) => {
      person.Homeworld = expected[index].Homeworld;
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
    })
    const result = await fetchSpecies(inputData);
    expect(result).toEqual(expected);
  })
})