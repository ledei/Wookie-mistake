import { useState } from "react";
import FetchFilms from "./FetchDataURL";

import { RenderData } from "./RenderData";

export function Films() {
  const [films, setFilms] = useState([]);

  let apiURL = `https://swapi.dev/api/films/?page=`;

  FetchFilms(apiURL, 1).then((data) => {
    setFilms(data);
  });

  return (
    <>
      <h1>Films</h1>
      {films && (
        <RenderData titleChecker="title" results={films} page="films" />
      )}
    </>
  );
}
