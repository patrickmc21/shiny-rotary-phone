const apiFetchCalls = (apiEndPoint) =>{
  const url = 'https://swapi.co/api/';
  return fetch(`${url}${apiEndPoint}`)
    .then(response => response.json());
}

export default apiFetchCalls;