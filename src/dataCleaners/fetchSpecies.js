const fetchSpecies = (peopleData) => {
  const peopleWithSpecies = peopleData.map(category => {
    return fetch(category.species)
      .then(response => response.json())
      .then(updatedCategory => (
        {
          name: category.name, 
          Homeworld: category.Homeworld, 
          'HomeWorld Population': category['Homeworld Population'], 
          Species: updatedCategory.name
        })
      )
      .catch(error => new Error(error.message));
  });
  return Promise.all(peopleWithSpecies);
};

export { fetchSpecies };