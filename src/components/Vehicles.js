import { useState } from "react";
import FetchVehicles from "./FetchDataURL";
import Pagination from "./Pagination";
import { PopUp } from "./PopUp";
import { RenderData } from "./RenderData";
import { Search } from "./Searchbar";

export function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [content, setContent] = useState("");
  const [togglePopUp, setTogglePopUp] = useState("hidden");

  let apiURL = `https://swapi.dev/api/vehicles/?page=`;

  FetchVehicles(apiURL, 4).then((data) => {
    setVehicles(data);
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = vehicles.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <PopUp
        content={content}
        page="vehicles"
        togglePopUp={togglePopUp}
        setTogglePopUp={setTogglePopUp}
      />

      <label>search</label>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search vehicles"
      />

      <h1>Vehicles</h1>

      {search === "" ? (
        vehicles && (
          <RenderData
            results={currentPosts}
            setContent={setContent}
            setTogglePopUp={setTogglePopUp}
          />
        )
      ) : (
        <Search
          data={vehicles}
          search={search}
          setContent={setContent}
          setTogglePopUp={setTogglePopUp}
        />
      )}
      {search === "" ? (
        <Pagination
          totalPosts={vehicles.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </>
  );
}
