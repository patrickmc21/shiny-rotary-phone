const fetchSpecies = (peopleData) => {
  const peopleWithSpecies = peopleData.map(category => {
    return fetch(category.species)
      .then(response => response.json())
      .then(updatedCategory => ({name: category.name, Homeworld: category.Homeworld, 'HomeWorld Population': category['Homeworld Population'], Species: updatedCategory.name}))
  })
  return Promise.all(peopleWithSpecies);
}

const cleanPeople = (peopleData) => {
   const people = peopleData.map(category => {
    return fetch(category.homeworld)
      .then(response => response.json())
      .then(updatedCategory => ({...category, Homeworld: updatedCategory.name, 'Homeworld Population': updatedCategory.population}))
    })
  return Promise.all(people)
    .then(peopleWithPlanets => fetchSpecies(peopleWithPlanets))
  
}

export { cleanPeople };


