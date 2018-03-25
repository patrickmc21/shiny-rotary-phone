import { cleanVehicles } from '../cleanVehicles.js';
import mockVehicleData from '../../mockData/vehicleData.js';
import cleanedVehicleData from '../../mockData/cleanedVehicleData.js';

describe('cleanVehicles', () => {

  it('should return a cleaned array of objects', async () => {
    const mockFetchReturn = mockVehicleData.results;
    const expected = cleanedVehicleData;
    const results = await cleanVehicles(mockFetchReturn);
    expect(results).toEqual(expected);
  });
});