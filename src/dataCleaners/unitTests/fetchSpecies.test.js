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
    inputData = peopleData.results;
    inputData.forEach((person, index) => {
      let hw = peopleData.results[index].homeworld;
      let pop = planetsData.results[hw].population;
      person.Homeworld = cleanPeopleMock[index].Homeworld;
      person['Homeworld Population'] = pop;
    });
    window.fetch = jest.fn().mockImplementation(() => {
      fetchCalled++;
      let person = peopleData.results[fetchCalled - 1].species;
      let spc = speciesData.results[person];
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(spc);
        }
      });
    });
  });

  it('calls fetch with correct params', () => {
    const expected = peopleData.results[0].species;
    fetchSpecies(inputData);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return a cleaned person dataset', async () => {
    const expected = cleanPeopleMock;
    const result = await fetchSpecies(inputData);
    expect(result).toEqual(expected);
  });

  it('should throw an error if fetch fails', async () => {
    let expected = [];
    for (let idx = 0; idx < 10; idx++) {
      expected.push(Error('response.json is not a function'));
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    const results = await fetchSpecies(inputData);
    expect(results).toEqual(expected);

  });
});