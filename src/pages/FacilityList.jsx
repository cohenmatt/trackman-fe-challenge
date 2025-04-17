import { Grid, Box } from "@mui/material";
import Facility from "../features/facility/Facility";
import Navbar from "../components/Navbar";
import { Counter } from "../features/counter/Counter";
import { Link } from "react-router-dom";

export default function FacilityList() {
    return (
        <>
        <Navbar />
        <Box sx={{p: 4}}>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <Facility name="Facility 1" />
                </Grid>
                <Grid size={4}>
                    <Facility name="Facility 2" />
                </Grid>
                <Grid size={4}>
                    <Facility name="Facility 3" />
                </Grid>
            </Grid>
        </Box>
        <Counter></Counter> 
        <Link to="/edit">Edit</Link>
        </>
    );
}