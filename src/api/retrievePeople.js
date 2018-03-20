
const retrievePeople = (apiEndPoint) => {
  const url = 'https://swapi.co/api/films/';
  return fetch(`${url}${apiEndPoint}`)
}

export default