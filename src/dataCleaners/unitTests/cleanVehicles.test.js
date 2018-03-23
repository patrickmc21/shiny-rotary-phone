import { cleanVehicles } from '../cleanVehicles.js';
import mockVehicleData from '../../mockData/vehicleData.js';
import cleanedVehicleData from '../../mockData/cleanedVehicleData.js';

describe('cleanVehicles', () => {

  it('should take in raw vehicle data and return a cleaned array of objects', async () => {
    const mockFetchReturn = mockVehicleData.results;
    const expected = cleanedVehicleData;
    const results = await cleanVehicles(mockFetchReturn);
    expect(results).toEqual(expected);
  })
})