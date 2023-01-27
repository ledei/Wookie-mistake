import { useEffect, useState } from "react";
import FetchPeople from "./FetchDataURL";
import Pagination from "./Pagination";
import { RenderData } from "./RenderPeopleData";

export function People() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  let apiURL = `https://swapi.dev/api/people/?page=`;

  useEffect(() => {
    FetchPeople(apiURL, 9).then((data) => {
      setPeople(data);
    });
  }, [apiURL]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = people.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {people && <RenderData results={currentPosts} title="People" />}
      <Pagination
        totalPosts={people.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
