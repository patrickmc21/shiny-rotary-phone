import peopleData from '../../mockData/peopleData.js';

export const fetchResidents = jest.fn().mockImplementation((mockArr) => {
  return mockArr.map(person => peopleData.results[person].name);
});