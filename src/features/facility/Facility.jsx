import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Facility({id}) {
    
    // Redux state
    const byId = useSelector(state => state.facilityList.byId);
    const facilityProps = byId[id];

    return (
        <Grid item size={4} key={id}>
            <Card variant="outlined">
                <CardContent>
                    <Typography>
                        {facilityProps.id}
                    </Typography>
                    <Typography>
                        {facilityProps.name}
                    </Typography>
                    <Typography>
                        {facilityProps.address}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}