import { Grid, Box, Button } from "@mui/material";
import Facility from "../features/facility/Facility";
import { Counter } from "../features/counter/Counter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFacility } from "../features/facilityList/facilityListSlice";

export default function FacilityList() {
    const goTo = useNavigate();
    const allIds = useSelector(state => state.facilityList.allIds);
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

    const facility = {};
    facility.id = count;
    facility.name = 'Facility 3';
    facility.address = '123 Main St';
    
    return (
        <>
        <Box sx={{p: 4}}>
            <Grid container spacing={2}>
                {allIds.map(facilityId => (
                    <Facility id={facilityId} />
                ))}
            </Grid>
        </Box>
        <Counter></Counter> 
        <Button variant="contained" onClick={() => goTo("/edit")}>Edit</Button>
        <Button variant="contained" onClick={() => dispatch(addFacility(facility))}>Add sample</Button>
        </>
    );
}