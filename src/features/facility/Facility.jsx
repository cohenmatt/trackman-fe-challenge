import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import { DeleteIcon } from "../../components/DeleteIcon.jsx";
import { useDispatch, useSelector } from "react-redux";
import { removeFacility } from "../facilityList/facilityListSlice.js";

export default function Facility({id}) {
    
    // Redux state
    const byId = useSelector(state => state.facilityList.byId);
    const dispatch = useDispatch();
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
                    <IconButton aria-label="delete" onClick={() => dispatch(removeFacility(id))}>
                        <DeleteIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    );
}