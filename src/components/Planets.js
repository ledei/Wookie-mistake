import { useState } from "react";
import FetchPlanets from "./FetchDataURL";
import Pagination from "./Pagination";
import { PopUp } from "./PopUp";
import { RenderData } from "./RenderData";
import { Search } from "./Searchbar";

export function Planets() {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState("");
  const [togglePopUp, setTogglePopUp] = useState("hidden");

  let apiURL = `https://swapi.dev/api/planets/?page=`;

  FetchPlanets(apiURL, 6).then((data) => {
    setPlanets(data);
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = planets.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <PopUp
        content={content}
        page="planets"
        togglePopUp={togglePopUp}
        setTogglePopUp={setTogglePopUp}
      />

      <label>search</label>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search planets"
      />

      <h1>Planets/Moons</h1>

      {search === "" ? (
        planets && (
          <RenderData
            results={currentPosts}
            setContent={setContent}
            setTogglePopUp={setTogglePopUp}
          />
        )
      ) : (
        <Search
          data={planets}
          search={search}
          setTogglePopUp={setTogglePopUp}
          setContent={setContent}
        />
      )}
      {search === "" ? (
        <Pagination
          totalPosts={planets.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </>
  );
}
