import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      { <nav> 
  
        <ul className="list-container">
          <li className="list">
            <Link to="/"className="beta-test">Home</Link>
          </li>
          <li className="list">
            <Link to="/Planets" className="beta-test" onClick={}>Planets</Link>
          </li>
          <li className="list">
            <Link to="/People" className="beta-test">People</Link>
          </li>
          <li className="list">
            <Link to="/Species" className="beta-test">Species</Link>
          </li>
          <li className="list">
            <Link to="/Vehicles" className="beta-test">Vehicles</Link>
          </li>
          <li className="list">
            <Link to="/Starships" className="beta-test">Starships</Link>
          </li>
          <li className="list">
            <Link to="/Films" className="beta-test"> Films</Link>
          </li>
        </ul> 
        
      </nav> }  
      
    </header>
    
  );
}
