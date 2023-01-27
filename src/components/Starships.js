import { useEffect, useState } from "react";
import FetchStarships from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderStarshipsData";

export function Starships() {
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  let apiURL = `https://swapi.dev/api/starships/?page=`;

  useEffect(() => {
    FetchStarships(apiURL, 4).then((data) => {
      setStarships(data);
    });
  }, [apiURL]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = starships.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {starships && <RenderData results={currentPosts} title="Starships" />}
      <Pagination
        totalPosts={starships.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
