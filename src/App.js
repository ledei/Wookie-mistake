import { Route, Routes } from "react-router-dom";
import { Planets } from "./components/Planets";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Planets" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
