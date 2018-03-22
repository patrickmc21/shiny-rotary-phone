import swapiCleaners from '../swapiCleaners.js';
import { cleanPeople } from '../cleanPeople.js'; 


describe('swapi cleaners', () => {

  it('should have a key of people that holds the cleanPeople function', () => {
    expect(swapiCleaners.people).toEqual(cleanPeople)
  })
})