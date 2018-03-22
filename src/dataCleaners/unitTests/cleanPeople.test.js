import { cleanPeople, fetchSpecies } from '../cleanPeople.js';
import peopleData from '../../mockData/peopleData.js';
import planetsData from '../../mockData/planetData.js';
import speciesData from '../../mockData/speciesData.js';

describe('cleanPeople', () => {

  let fetchReturn;
  let expected;
  let fetchCalled = 0;


  beforeEach(() => {
    fetchReturn = peopleData.results;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          let promise;
          if (fetchCalled < 10){
            promise = Promise.resolve(planetsData.results[fetchReturn[fetchCalled].homeworld])
            fetchCalled++
            return promise;
          } else {
            promise = Promise.resolve(speciesData.results[fetchReturn[fetchCalled - 10].species])
            fetchCalled++
            return promise;
          }
        }
      });
    });
    expected = [
      {
        name: 'Luke Skywalker',
        Homeworld: 'Alderaan',
        'HomeWorld Population': "2000000000",
        Species: 'Human'
      },
      {
        name: 'C-3PO',
        Homeworld: 'Alderaan',
        'HomeWorld Population': "2000000000",
        Species: 'Droid'
      },
      {
        name: 'R2-D2',
        Homeworld: 'Yavin IV',
        'HomeWorld Population': "1000",
        Species: 'Droid'
      },
      {
        name: 'Darth Vader',
        Homeworld: 'Alderaan',
        'HomeWorld Population': "2000000000",
        Species: 'Human'
      },
      {
        name: 'Leia Organa',
        Homeworld: 'Alderaan',
        'HomeWorld Population': "2000000000",
        Species: 'Human'
      },
      {
        name: 'Owen Lars',
        Homeworld: 'Alderaan',
        'HomeWorld Population': "2000000000",
        Species: 'Human'
      },
      {
        name: 'Beru Whitesun lars',
        Homeworld: 'Alderaan',
        'HomeWorld Population': "2000000000",
        Species: 'Human',
      },
      {
        name: 'R5-D4',
        Homeworld: 'Yavin IV',
        'HomeWorld Population': "1000",
        Species: 'Droid'
      },
      {
        name: 'Biggs Darklighter',
        Homeworld: 'Alderaan',
        'HomeWorld Population': "2000000000",
        Species: 'Human'
      },
      {
        name: 'Obi-Wan Kenobi',
        Homeworld: 'Hoth',
        'HomeWorld Population': 'unknown',
        Species: 'Human'  
      }
    ];
  })

  it.skip('should call fetchSpecies', () => {
    const spy = jest.spyOn(fetchSpecies);
    const expectedParams = fetchReturn.map((dataSet, index) => {
      return {...dataSet, Homeworld: expected[index].Homeworld, 'Homeworld Population': expected[index]['Homeworld Population']}
    })
    cleanPeople(fetchReturn);
    expect(spy).toHaveBeenCalledWith(expectedParams);
  })

  it('should return a cleaned array of 10 people', async () => {
    const cleanPeopleResult = await cleanPeople(fetchReturn);
    expect(cleanPeopleResult).toEqual(expected);
  });
})