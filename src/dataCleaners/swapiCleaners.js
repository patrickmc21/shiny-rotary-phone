import { cleanPeople } from './cleanPeople.js';
import { cleanVehicles } from './cleanVehicles.js';
import { cleanPlanets } from './cleanPlanets.js';

const swapiCleaners = {
  people: cleanPeople,
  vehicles: cleanVehicles,
  planets: cleanPlanets
}

export default swapiCleaners;
