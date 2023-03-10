import { useState } from "react";
import FetchSpecies from "./FetchDataURL";
import Pagination from "./Pagination";

import { RenderData } from "./RenderData";
import { Search } from "./Searchbar";

export function Species() {
  const [species, setSpecies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search, setSearch] = useState("");

  let apiURL = `https://swapi.dev/api/species/?page=`;

  FetchSpecies(apiURL, 4).then((data) => {
    setSpecies(data);
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = species.slice(firstPostIndex, lastPostIndex);

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
          placeholder="Search species"
        />
      </div>

      <h1>Species</h1>

      {search === "" ? (
        species && (
          <RenderData
            results={currentPosts}
            page="species"
            fetchHomeChecker="fetch"
          />
        )
      ) : (
        <Search
          data={species}
          search={search}
          fetchHomeChecker="fetch"
          page="species"
        />
      )}
      {search === "" ? (
        <Pagination
          totalPosts={species.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ) : null}
    </>
  );
}
