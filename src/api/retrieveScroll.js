
let randomNumber = Math.floor(Math.random() * 7) + 1

const retrieveScroll = () => {
  return fetch(`https://swapi.co/api/films/${randomNumber}/`)
    .then(response => response.json());
}

export default retrieveScroll;