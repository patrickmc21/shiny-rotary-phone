import apiFetchCalls from '../apiFetchCalls.js';

describe('apiFetchCalls', () => {

  let mockPeopleReturn;
  let mockEndpoint1;
  let mockEndpoint2;

  beforeEach(() => {

    mockPeopleReturn = 
      [
        {
          name: 'Luke Skywalker',
          Homeworld: 'Alderaan',
          'HomeWorld Population': "2000000000",
          Species: 'Human'
        }
      ];
    mockEndpoint1 = 'people';
    mockEndpoint2 = 'tacos';
    window.fetch = jest.fn().mockImplementation((apiEndPoint) => {
      switch (apiEndPoint.includes('people')) {
      case true:
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockPeopleReturn);
          }
        });
      case false:
        return Promise.reject({message: 'an error occured'});
      default :
        return;
      }
    });
  });

  it('should fetch from the api based on provided apiEndPoint', async () => {
    const results = await apiFetchCalls(mockEndpoint1);
    expect(results).toEqual(mockPeopleReturn);
  });

  it('should return an error message if a bad request is sent', async () => {
    const expected = 'an error occured';
    const results = await apiFetchCalls(mockEndpoint2);
    expect(results).toEqual(expected);
  });
});