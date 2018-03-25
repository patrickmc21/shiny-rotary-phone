const cleanStarships = (starshipData) => {
  const ships = starshipData.map(ship => {
    return (
      {
        name: ship.name,
        Model: ship.model,
        Class: ship.starship_class,
        Manufacturer: ship.manufacturer,
        Length: `${ship.length} meters`
      }
    );
  });
  return Promise.all(ships);
};

export { cleanStarships };