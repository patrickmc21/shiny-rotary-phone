import peopleData from '../../mockData/peopleData.js';
import planetsData from '../../mockData/planetData.js';
import cleanPeopleMock from '../../mockData/cleanedPeopleData.js';

const fetchPlanet = () => {
  return peopleData.results.map((person, index) => {
      person.Homeworld = planetsData.results[person.homeworld].name;
      person['Homeworld Population'] = planetsData.results[person.homeworld].population;
      return person;
  });
};

const fetchSpecies = () => {
 return cleanPeopleMock;
}

export default { fetchPlanet, fetchSpecies }