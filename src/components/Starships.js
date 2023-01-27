import { useEffect, useState } from "react";
import FetchStarships from "./FetchDataURL";
import { RenderData } from "./RenderStarshipsData";

export function Starships() {
  const [starships, setStarships] = useState([]);
  const [count, setCount] = useState(1);

  let apiURL = `https://swapi.dev/api/starships/?page=`;

  useEffect(() => {
    FetchStarships(apiURL, 4).then((data) => {
      setStarships(data);
    });
  }, [apiURL]);

  return (
    <>
      {starships && <RenderData results={starships} title="Starships" />}
      <button onClick={() => setCount(count - 1)}>back</button>
      <button onClick={() => setCount(count + 1)}>next</button>
    </>
  );
}
