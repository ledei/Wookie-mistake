import { useEffect, useState } from "react";
import FetchSpecies from "./FetchDataURL";
import { RenderData } from "./RenderSpeciesData";

export function Species() {
  const [species, setSpecies] = useState([]);
  const [count, setCount] = useState(1);

  let apiURL = `https://swapi.dev/api/species/?page=`;

  useEffect(() => {
    FetchSpecies(apiURL, 4).then((data) => {
      setSpecies(data);
    });
  }, [apiURL]);

  return (
    <>
      {species && <RenderData results={species} title="Species" />}
      <button onClick={() => setCount(count - 1)}>back</button>
      <button onClick={() => setCount(count + 1)}>next</button>
    </>
  );
}
