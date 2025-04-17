import { Grid, Box, Button } from "@mui/material";
import Facility from "../features/facility/Facility";
import { Counter } from "../features/counter/Counter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFacility } from "../features/facilityList/facilityListSlice";

export default function FacilityList() {
    const goTo = useNavigate();
    const facilities = useSelector(state => state.facilityList.allIds);
    const dispatch = useDispatch();

    const sample = {
        'facility1': {
            id: 'facility1',
            name: 'Facility 1',
            address: '123 Main St'
        }
    };
    
    return (
        <>
        <Box sx={{p: 4}}>
            <Grid container spacing={2}>
                {facilities.map(facilityId => (
                    <Facility id={facilityId} />
                ))}
            </Grid>
        </Box>
        <Counter></Counter> 
        <Button variant="contained" onClick={() => goTo("/edit")}>Edit</Button>
        <Button variant="contained" onClick={() => dispatch(addFacility(sample))}>Add sample</Button>
        </>
    );
}