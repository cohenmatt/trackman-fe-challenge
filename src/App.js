import "./App.css";
import Navbar from "./components/Navbar";
import FacilityList from "./pages/FacilityList";
import { Box } from "@mui/material";

function App() {
    return (
        <>
            <Navbar />
            <Box sx={{p: 4}}>
              <FacilityList />
            </Box>
        </>
    );
}

export default App;
