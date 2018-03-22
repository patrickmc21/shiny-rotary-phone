const cleanVehicles = (vehicleData) => {
  const vehicles = vehicleData.map(vehicle => {
    return (
      {
        name: vehicle.name, 
        Model: vehicle.model, 
        Class: vehicle.vehicle_class, 
        'Number Of Passenegers': vehicle.passengers
      }
    )
  })
  return Promise.all(vehicles)
}

export { cleanVehicles };