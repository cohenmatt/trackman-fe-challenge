import { Card, CardContent, Grid, IconButton, Typography, Stack, Button } from "@mui/material";
import { DeleteIcon } from "../../components/DeleteIcon.jsx";
import { StarIcon } from "../../components/StarIcon.jsx";
import { useDispatch, useSelector } from "react-redux";
import { removeFacility } from "../facilityList/facilityListSlice.js";
import { useNavigate } from "react-router-dom";
import fallbackImage from "../../images/facility_generic.jpg";


export default function Facility({id}) {
    const byId = useSelector(state => state.facilityList.byId);
    const isDefaultId = useSelector(state => state.facilityList.defaultId === id) ;
    const dispatch = useDispatch();
    const facilityProps = byId[id];
    const goTo = useNavigate();

    return (
        <Grid item size={4} key={id}>
            <Card variant="outlined">
                <CardContent>
                    {isDefaultId && <StarIcon />}
                    <img
                        src={facilityProps.imageUrl || fallbackImage}
                        alt="Facility preview"
                        height={100}
                        />
                    <Typography>
                        {facilityProps.name}
                    </Typography>
                    <Typography>
                        {facilityProps.address}
                    </Typography>
                    <Stack direction="row">
                        <IconButton aria-label="delete" onClick={() => dispatch(removeFacility(id))}>
                            <DeleteIcon />
                        </IconButton>
                        <Button variant="contained" onClick={() => goTo(`/edit/${id}`)}>
                            Edit
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
}