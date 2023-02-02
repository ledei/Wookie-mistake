import { useState } from "react";
import FetchStarships from "./FetchDataURL";
import Pagination from "./Pagination";

import { RenderData } from "./RenderData";
import { Search } from "./Searchbar";

export function Starships() {
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search, setSearch] = useState("");

  let apiURL = `https://swapi.dev/api/starships/?page=`;

  FetchStarships(apiURL, 4).then((data) => {
    setStarships(data);
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = starships.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="container-search">
        <label className="search-label">search</label>
        <input
          className="search-input"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search starships"
        />
      </div>

      <h1>Starships</h1>

      {search === "" ? (
        starships && <RenderData results={currentPosts} page="starships" />
      ) : (
        <Search data={starships} search={search} page="starships" />
      )}
      {search === "" ? (
        <Pagination
          totalPosts={starships.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ) : null}
    </>
  );
}
