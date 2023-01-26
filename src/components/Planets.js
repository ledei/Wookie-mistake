import { useEffect, useState } from "react";
import FetchPlanets from "./FetchDataURL";
import { RenderData } from "./RenderData";

const apiPlanetURL = "https://swapi.dev/api/planets/?page=1";

export function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    FetchPlanets(apiPlanetURL).then((data) => {
      setPlanets(data);
    });
  }, []);

  return <>{planets && <RenderData results={planets} title="Planets" />}</>;
}
