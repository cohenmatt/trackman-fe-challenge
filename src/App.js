import "./App.css";
import Navbar from "./components/Navbar";
import { Counter } from "./features/counter/Counter";
import FacilityList from "./pages/FacilityList";
import { Box } from "@mui/material";

function App() {
    return (
        <>
            <Navbar />
            <Box sx={{p: 4}}>
              <FacilityList />
            </Box>
            <Counter></Counter> 
        </>
    );
}

export default App;
