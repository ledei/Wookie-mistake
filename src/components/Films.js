import { useEffect, useState } from "react";
import FetchFilms from "./FetchDataURL";
import { RenderData } from "./RenderFilmsData";

export function Films() {
  const [films, setFilms] = useState([]);

  let apiURL = `https://swapi.dev/api/films/?page=`;

  useEffect(() => {
    FetchFilms(apiURL, 1).then((data) => {
      setFilms(data);
    });
  }, [apiURL]);

  return <>{films && <RenderData results={films} title="Films" />}</>;
}
