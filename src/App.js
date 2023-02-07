import { Route, Routes } from "react-router-dom";
import { Planets } from "./components/Planets";
import { People } from "./components/People";
import { Species } from "./components/Species";
import { Vehicles } from "./components/Vehicles";
import { Starships } from "./components/Starships";
import { Films } from "./components/Films";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Wookie-mistake" element={<Home />} />
        <Route path="/Planets" element={<Planets />} />
        <Route path="/People" element={<People />} />
        <Route path="/Species" element={<Species />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/Starships" element={<Starships />} />
        <Route path="/Films" element={<Films />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
