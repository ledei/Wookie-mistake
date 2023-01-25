function fetchJson(url) {
  return fetch(url).then((resp) => resp.json());
}

function extractResult(data) {
  return data.results;
}

export default async function results(url) {
  let results = await fetchJson(url).then(extractResult);

  console.log(results);

  return results;
}
