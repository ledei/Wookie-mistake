import { useEffect, useState } from "react";
import FetchPlanets from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderPlanetData";

export function Planets() {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  let apiURL = `https://swapi.dev/api/planets/?page=`;

  useEffect(() => {
    FetchPlanets(apiURL, 6).then((data) => {
      setPlanets(data);
    });
  }, [apiURL]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = planets.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {planets && <RenderData results={currentPosts} title="Planets" />}
      <Pagination
        totalPosts={planets.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
