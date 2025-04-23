import { Card, CardContent, Grid, IconButton, Typography, Stack, Button, Chip } from "@mui/material";
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
    
    const date = new Date();
    const currentTime = date.getHours();
    const openingTime = parseInt(facilityProps.openingTime.split(':')[0], 10);
    const closingTime = parseInt(facilityProps.closingTime.split(':')[0], 10);
    const isOpen = currentTime >= openingTime && currentTime < closingTime;

    return (
        <Grid size={4} key={id}>
            <Card variant="outlined" sx={{
                width: "348px",
                borderRadius: "8px",
                padding: "12px"
            }}>
                <CardContent>
                    {isDefaultId && <StarIcon />}
                    <img
                        src={facilityProps.imageUrl || fallbackImage}
                        alt="Facility preview"
                        height={100}
                        />
                    <Stack direction="row">
                        <Typography>
                            {facilityProps.name}
                        </Typography>
                        <Chip label={isOpen ? "open" : "closed"} color={isOpen ? "success" : "error"}/>
                    </Stack>
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