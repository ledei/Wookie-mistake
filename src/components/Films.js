import { useState } from "react";
import FetchFilms from "./FetchDataURL";
import { RenderData } from "./RenderFilmsData";

export function Films() {
  const [films, setFilms] = useState([]);

  let apiURL = `https://swapi.dev/api/films/?page=`;

  FetchFilms(apiURL, 1).then((data) => {
    setFilms(data);
  });

  return <>{films && <RenderData results={films} title="Films" />}</>;
}
