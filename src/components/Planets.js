import { useEffect, useState } from "react";
import FetchPlanets from "./FetchDataURL";
import { RenderData } from "./RenderPlanetData";

export function Planets() {
  const [planets, setPlanets] = useState([]);
  const [count, setCount] = useState(1);

  let apiURL = `https://swapi.dev/api/planets/?page=`;

  useEffect(() => {
    FetchPlanets(apiURL, 6).then((data) => {
      setPlanets(data);
    });
  }, [apiURL]);

  return (
    <>
      {planets && <RenderData results={planets} title="Planets" />}
      <button onClick={() => setCount(count - 1)}>back</button>
      <button onClick={() => setCount(count + 1)}>next</button>
    </>
  );
}
