import { useState } from "react";
import FetchFilms from "./FetchDataURL";
import { PopUp } from "./PopUp";
import { RenderData } from "./RenderData";

export function Films() {
  const [films, setFilms] = useState([]);
  const [togglePopUp, setTogglePopUp] = useState("hidden");
  const [content, setContent] = useState("");

  let apiURL = `https://swapi.dev/api/films/?page=`;

  FetchFilms(apiURL, 1).then((data) => {
    setFilms(data);
  });

  return (
    <>
      <PopUp
        content={content}
        page="films"
        togglePopUp={togglePopUp}
        setTogglePopUp={setTogglePopUp}
      />
      <h1>Films</h1>
      {films && (
        <RenderData
          titleChecker="title"
          results={films}
          setContent={setContent}
          setTogglePopUp={setTogglePopUp}
        />
      )}
    </>
  );
}
