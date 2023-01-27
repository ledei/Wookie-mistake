import { useEffect, useState } from "react";
import FetchVehicles from "./FetchDataURL";
import { RenderData } from "./RenderVehiclesData";

export function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [count, setCount] = useState(1);

  let apiURL = `https://swapi.dev/api/vehicles/?page=`;

  useEffect(() => {
    FetchVehicles(apiURL, 4).then((data) => {
      setVehicles(data);
    });
  }, [apiURL]);

  return (
    <>
      {vehicles && <RenderData results={vehicles} title="Vehicles" />}
      <button onClick={() => setCount(count - 1)}>back</button>
      <button onClick={() => setCount(count + 1)}>next</button>
    </>
  );
}
