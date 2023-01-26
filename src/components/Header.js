import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/Planets">Planets</Link>
          </li>
          <li>
            <Link to="/People">People</Link>
          </li>
          <li>
            <Link to="/Species">Species</Link>
          </li>
          <li>
            <Link to="/Vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/Starships">Starships</Link>
          </li>
          <li>
            <Link to="/Films">Films</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
