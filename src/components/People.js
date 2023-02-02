import { useState } from "react";
import FetchPeople from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderData";
import { Search } from "./Searchbar";

export function People() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search, setSearch] = useState("");

  console.log(currentPage);

  const apiURL = `https://swapi.dev/api/people/?page=`;

  FetchPeople(apiURL, 9).then((data) => {
    setPeople(data);
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = people.slice(firstPostIndex, lastPostIndex);

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
          placeholder="Search people"
        />
      </div>

      <h1>People</h1>

      {search === "" ? (
        people && (
          <RenderData
            results={currentPosts}
            fetchHomeChecker="fetch"
            page="people"
          />
        )
      ) : (
        <Search
          data={people}
          search={search}
          fetchHomeChecker="fetch"
          page="people"
        />
      )}

      {search === "" ? (
        <Pagination
          totalPosts={people.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ) : null}
    </>
  );
}
