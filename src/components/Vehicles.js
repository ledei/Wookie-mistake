import { useEffect, useState } from "react";
import FetchVehicles from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderVehiclesData";

export function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  let apiURL = `https://swapi.dev/api/vehicles/?page=`;

  useEffect(() => {
    FetchVehicles(apiURL, 4).then((data) => {
      setVehicles(data);
    });
  }, [apiURL]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = vehicles.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {vehicles && <RenderData results={currentPosts} title="Vehicles" />}
      <Pagination
        totalPosts={vehicles.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
