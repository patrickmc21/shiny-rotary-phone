import peopleData from '../../mockData/peopleData.js';
import planetsData from '../../mockData/planetData.js';

export const fetchResidents = jest.fn().mockImplementation((arr) => {
  return arr.map(person => peopleData.results[person].name)
})