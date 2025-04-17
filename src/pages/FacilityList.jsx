import { Grid, Box, Button } from "@mui/material";
import Facility from "../features/facility/Facility";
import { Counter } from "../features/counter/Counter";
import { useNavigate } from "react-router-dom";

export default function FacilityList() {
    const goTo = useNavigate();
    
    return (
        <>
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
        <Button variant="contained" onClick={() => goTo("/edit")}>Edit</Button>
        </>
    );
}