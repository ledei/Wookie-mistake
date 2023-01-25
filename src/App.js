import { Route, Routes } from "react-router-dom";
import { Planets } from "./components/Planets";

function App() {
  return (
    <div className="App">
      <Planets />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
