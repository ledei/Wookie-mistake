import { useState } from "react";
import FetchPeople from "./FetchDataURL";
import Pagination from "./Pagination";
import { PopUp } from "./PopUp";
import { RenderData } from "./RenderData";
import { Search } from "./Searchbar";

export function People() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState("");
  const [togglePopUp, setTogglePopUp] = useState("hidden");
  const [homeWorld, setHomeWorld] = useState("");

  const apiURL = `https://swapi.dev/api/people/?page=`;

  FetchPeople(apiURL, 9).then((data) => {
    setPeople(data);
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = people.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <PopUp
        content={content}
        page="people"
        togglePopUp={togglePopUp}
        setTogglePopUp={setTogglePopUp}
        homeWorld={homeWorld}
      />

      <label>search</label>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search people"
      />

      <h1>People</h1>

      {search === "" ? (
        people && (
          <RenderData
            results={currentPosts}
            setContent={setContent}
            setTogglePopUp={setTogglePopUp}
            setHomeWorld={setHomeWorld}
            fetchHomeChecker="fetch"
          />
        )
      ) : (
        <Search
          setTogglePopUp={setTogglePopUp}
          data={people}
          search={search}
          setContent={setContent}
          setHomeWorld={setHomeWorld}
          fetchHomeChecker="fetch"
        />
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
