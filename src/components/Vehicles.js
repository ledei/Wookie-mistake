import { useState } from "react";
import FetchVehicles from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderData";
import { Search } from "./Searchbar";

export function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const [search, setSearch] = useState("");

  let apiURL = `https://swapi.dev/api/vehicles/?page=`;

  FetchVehicles(apiURL, 4).then((data) => {
    setVehicles(data);
  });

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = vehicles.slice(firstPostIndex, lastPostIndex);

  return (
    <>
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
        vehicles && <RenderData results={currentPosts} page="vehicles" />
      ) : (
        <Search data={vehicles} search={search} page="vehicles" />
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
