import peopleData from '../../mockData/peopleData.js';
import planetsData from '../../mockData/planetData.js';

export const fetchPlanet = () => {
  return peopleData.results.map((person, index) => {
      person.Homeworld = planetsData.results[person.homeworld].name;
      person['Homeworld Population'] = planetsData.results[person.homeworld].population;
      return person;
  });
};