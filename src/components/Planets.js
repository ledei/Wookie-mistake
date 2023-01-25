import React from "react";
import FetchPlanets from "./FetchDataURL";

const apiPlanetURL = "https://swapi.dev/api/planets/?page=1";

FetchPlanets(apiPlanetURL).then(Planets);

export function Planets(data) {
  let planets = [];

  for (let i = 0; i < data.length; i++) {
    planets.push({ name: data[i].name, index: i });
  }

  console.log(planets);

  return (
    <div>
      {planets.map((planet) => {
        return <h1 key={planet.index}>{planet.name}</h1>;
      })}
    </div>
  );
}
