import { Grid } from "@mui/material";
import Facility from "../components/Facility";

export default function FacilityList() {
    return (
        <>
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
        </>
    );
}