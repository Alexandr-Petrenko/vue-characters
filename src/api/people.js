const BASE_URL = 'https://swapi.dev/api';

async function get(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const results = await response.json();

  return results.results;
}

export function getPeople() { // eslint-disable-line
  return get('/people/'); // eslint-disable-line
}
