import React from "react";
import FetchPlanets from "../fetchDataURL";

const apiPlanetURL = "https://swapi.dev/api/planets/?page=1";

FetchPlanets(apiPlanetURL);

export function Planets() {
  return <div></div>;
}
