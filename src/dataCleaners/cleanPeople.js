import { fetchPlanet } from './fetchPlanet.js';
import { fetchSpecies } from './fetchSpecies.js';

const cleanPeople = async (peopleData) => {
  const peopleWithPlanets = await fetchPlanet(peopleData);
  return await fetchSpecies(peopleWithPlanets);
};

export { cleanPeople };


