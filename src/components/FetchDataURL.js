export default async function FetchDataURL(url, page) {
  function fetchJson(url) {
    return fetch(url).then((resp) => resp.json());
  }

  function extractResult(data) {
    return data.results;
  }

  let dataResult = [];

  for (let i = 1; i <= page; i++) {
    let results = await fetchJson(url + [i]).then(extractResult);
    for (let result of results) {
      dataResult.push(result);
    }
  }

  return dataResult;
}
