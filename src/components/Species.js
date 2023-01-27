import { useEffect, useState } from "react";
import FetchSpecies from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderSpeciesData";

export function Species() {
  const [species, setSpecies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  let apiURL = `https://swapi.dev/api/species/?page=`;

  useEffect(() => {
    FetchSpecies(apiURL, 4).then((data) => {
      setSpecies(data);
    });
  }, [apiURL]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = species.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {species && <RenderData results={currentPosts} title="Species" />}
      <Pagination
        totalPosts={species.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
