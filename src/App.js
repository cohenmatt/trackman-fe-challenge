import "./App.css";
import FacilityEdit from "./pages/FacilityEdit";
import FacilityList from "./pages/FacilityList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
        <>
        <Routes>
          <Route path="/" element={<FacilityList />} />
          <Route path="/edit" element={<FacilityEdit />} />
        </Routes>
        </>
    );
}

export default App;
