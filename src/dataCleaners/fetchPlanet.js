const fetchPlanet = (peopleData) => {
  const peopleWithPlanets = peopleData.map(category => {
    return fetch(category.homeworld)
      .then(response => response.json())
      .then(updatedCategory => (
        {
          ...category, 
          Homeworld: updatedCategory.name, 
          'Homeworld Population': updatedCategory.population
        }
      ))
      .catch(error =>  new Error(error.message));
  });
  return Promise.all(peopleWithPlanets);
};

export { fetchPlanet }; 