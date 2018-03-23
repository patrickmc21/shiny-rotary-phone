import cleanPeopleMock from '../../mockData/cleanedPeopleData.js';

export const fetchSpecies = jest.fn().mockImplementation(() => cleanPeopleMock)
