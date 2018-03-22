const fetchResidents = (planetResidents) => {
  const planets = planetResidents.map(resident => {
    return fetch(resident)
      .then(response => response.json())
      .then(resident => resident.name)
  })
  return Promise.all(planets);
}

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

export { cleanPlanets, fetchResidents };