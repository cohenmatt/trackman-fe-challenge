import "./App.css";
import Navbar from "./components/Navbar";
import FacilityEdit from "./pages/FacilityEdit";
import FacilityList from "./pages/FacilityList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
        <>
        <Navbar />
        <Routes>
          <Route path="/" element={<FacilityList />} />
          <Route path="/edit" element={<FacilityEdit />}>
            <Route path=":facilityId" element={<FacilityEdit />} />
          </Route>
        </Routes>
        </>
    );
}

export default App;
