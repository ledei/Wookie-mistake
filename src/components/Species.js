import { useState } from "react";
import FetchSpecies from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderSpeciesData";
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
      <label>search</label>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search contacts"
      />

      {search === "" ? (
        species && <RenderData results={currentPosts} title="Species" />
      ) : (
        <Search data={species} title="Species" search={search} />
      )}
      {search === "" ? (
        <Pagination
          totalPosts={species.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </>
  );
}
