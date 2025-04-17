import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Facility({id}) {
    
    // Redux state
    const facility = useSelector(state => state.facilityList.byId[id]);
    const allFacilities = useSelector(state => state.facilityList.allIds);
    console.log("All: ", allFacilities);
    console.log("Facility: ", facility);
    console.log("Address: ", facility.address);


    return (
        <Grid item size={4} key={id}>
            <Card variant="outlined">
                <CardContent>
                    <Typography>
                        {facility.name}
                    </Typography>
                    <Typography>
                        {facility.address}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}