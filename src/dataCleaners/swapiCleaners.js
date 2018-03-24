import { cleanPeople } from './cleanPeople.js';
import { cleanVehicles } from './cleanVehicles.js';
import { cleanPlanets } from './cleanPlanets.js';
import { cleanStarships } from './cleanStarships.js';

const swapiCleaners = {
  people: cleanPeople,
  vehicles: cleanVehicles,
  planets: cleanPlanets,
  starships: cleanStarships
}

export default swapiCleaners;
