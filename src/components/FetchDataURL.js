export default async function FetchDataURL(url) {
  function fetchJson(url) {
    return fetch(url).then((resp) => resp.json());
  }

  function extractResult(data) {
    return data.results;
  }

  let results = await fetchJson(url).then(extractResult);

  return results;
}
