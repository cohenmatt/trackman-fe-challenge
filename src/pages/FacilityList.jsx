import { Grid, Box, Button } from "@mui/material";
import Facility from "../features/facility/Facility";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FacilityList() {
    const goTo = useNavigate();
    const allIds = useSelector(state => state.facilityList.allIds);
    const count = useSelector(state => state.counter.value)

    const facility = {};
    facility.id = count;
    facility.name = 'Facility 3';
    facility.address = '123 Main St';
    
    return (
        <Box sx={{
            width: "1200px",
            pt: "32px"
        }}>
            <Box>
                <Button variant="contained" onClick={() => goTo("/edit")}>Create Facility</Button>
            </Box>
            <Box sx={{p: 4}}>
                <Grid container spacing={2}>
                    {allIds.map(facilityId => (
                        <Facility id={facilityId} />
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}