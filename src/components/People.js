import { useState } from "react";
import FetchPeople from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderPeopleData";
import { Search } from "./Searchbar";

export function People() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const apiURL = `https://swapi.dev/api/people/?page=`;

  FetchPeople(apiURL, 9).then((data) => {
    setPeople(data);
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = people.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <label>search</label>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search people"
      />

      {search === "" ? (
        people && <RenderData results={currentPosts} title="People" />
      ) : (
        <Search data={people} title="People" search={search} />
      )}

      {search === "" ? (
        <Pagination
          totalPosts={people.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </>
  );
}
