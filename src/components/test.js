export default async function FetchDataURL(url, page) {
  function fetchJson(url) {
    return fetch(url).then((resp) => resp.json());
  }

  function extractResult(data) {
    return data.results;
  }

  let dataResult = [];

  for (let i = 1; i <= page; i++) {
    console.log(url + [i]);
    let results = await fetchJson(url + [i]).then(extractResult);
    for (let result of results) {
      console.log(result);
      dataResult.push(result);
    }
  }

  return dataResult;
}
