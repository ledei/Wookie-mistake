import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [active, setActive] = useState("home");

  function handleClick(activate) {
    console.log(activate);
    setActive(activate);
  }
  return (
    <header>
      {
        <nav>
          <ul className="list-container">
            <li
              className="list"
              onClick={() => {
                handleClick("home");
              }}>
              <Link to="/" className={active === "home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li
              className="list"
              onClick={() => {
                handleClick("planets");
              }}>
              <Link
                to="/Planets"
                className={active === "planets" ? "active" : ""}>
                Planets
              </Link>
            </li>
            <li
              className="list"
              onClick={() => {
                handleClick("people");
              }}>
              <Link
                to="/People"
                className={active === "people" ? "active" : ""}>
                People
              </Link>
            </li>
            <li
              className="list"
              onClick={() => {
                handleClick("species");
              }}>
              <Link
                to="/Species"
                className={active === "species" ? "active" : ""}>
                Species
              </Link>
            </li>
            <li
              className="list"
              onClick={() => {
                handleClick("vehicles");
              }}>
              <Link
                to="/Vehicles"
                className={active === "vehicles" ? "active" : ""}>
                Vehicles
              </Link>
            </li>
            <li
              className="list"
              onClick={() => {
                handleClick("starships");
              }}>
              <Link
                to="/Starships"
                className={active === "starships" ? "active" : ""}>
                Starships
              </Link>
            </li>
            <li
              className="list"
              onClick={() => {
                handleClick("films");
              }}>
              <Link to="/Films" className={active === "films" ? "active" : ""}>
                {" "}
                Films
              </Link>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
}
