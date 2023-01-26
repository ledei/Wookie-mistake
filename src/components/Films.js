import { useEffect, useState } from "react";
import FetchFilms from "./FetchDataURL";
import { RenderData } from "./RenderFilmsData";

export function Films() {
  const [films, setFilms] = useState([]);

  let apiURL = `https://swapi.dev/api/films/`;

  useEffect(() => {
    FetchFilms(apiURL).then((data) => {
      setFilms(data);
    });
  }, [apiURL]);

  return <>{films && <RenderData results={films} title="Films" />}</>;
}
