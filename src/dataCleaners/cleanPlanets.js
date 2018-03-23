import { fetchResidents } from './fetchResidents.js';

const cleanPlanets = (planetsData) => {
  const planets = planetsData.map( async (planet) => {
      let residents = await fetchResidents(planet.residents);
      return (
        {
          name: planet.name, 
          Terrain: planet.terrain, 
          Population: planet.population, 
          Climate: planet.climate, 
          Residents: residents.join(', ')
        }
      )
    });
  return Promise.all(planets)
}

export { cleanPlanets };