import { useState } from "react";
import FetchPlanets from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderPlanetData";
import { Search } from "./Searchbar";

export function Planets() {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search, setSearch] = useState("");

  let apiURL = `https://swapi.dev/api/planets/?page=`;

  FetchPlanets(apiURL, 6).then((data) => {
    setPlanets(data);
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = planets.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <label>search</label>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search planets"
      />
      {search === "" ? (
        planets && <RenderData results={currentPosts} title="Planets" />
      ) : (
        <Search data={planets} title="Planets" search={search} />
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
