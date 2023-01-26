import { useEffect, useState } from "react";
import FetchPeople from "./FetchDataURL";
import { RenderData } from "./RenderPeopleData";

export function People() {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(1);

  let apiURL = `https://swapi.dev/api/people/?page=${count}`;

  useEffect(() => {
    FetchPeople(apiURL).then((data) => {
      setPeople(data);
    });
  }, [apiURL]);

  return (
    <>
      {people && <RenderData results={people} title="People" />}
      <button onClick={() => setCount(count - 1)}>back</button>
      <button onClick={() => setCount(count + 1)}>next</button>
    </>
  );
}
