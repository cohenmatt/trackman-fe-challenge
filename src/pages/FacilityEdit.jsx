import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addFacility } from "../features/facilityList/facilityListSlice";

export default function FacilityEdit() {
    const { control, handleSubmit } = useForm();
    const goTo = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(addFacility(data));
        alert(JSON.stringify(data));
    };

    const params = useParams();
    const isEditMode = params.facilityId !== undefined;

    // TODO: protect against undefined ID?
    const facilityInfo = useSelector(state => state.facilityList.byId[params.facilityId]);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" spacing={2} sx={{p: 2}}>
                <Typography variant="h3">
                    {isEditMode ? "Edit Facility" : "Create a New Facility"}
                </Typography>
                <Controller
                    name="id"
                    control={control}
                    defaultValue={isEditMode ? facilityInfo.id : ""}
                    render={({ field }) => (
                        <TextField {...field} label="ID" variant="outlined" />
                    )}
                />
                <Controller
                    name="name"
                    control={control}
                    defaultValue={isEditMode ? facilityInfo.name : ""}
                    render={({ field }) => (
                        <TextField {...field} label="Name" variant="outlined" />
                    )}
                />
                <Controller
                    name="address"
                    control={control}
                    defaultValue={isEditMode ? facilityInfo.address : ""}
                    render={({ field }) => (
                        <TextField {...field} label="Address" variant="outlined" />
                    )}
                />
                <Button type="submit">Submit</Button>
                <Button variant="contained" onClick={() => goTo("/")}>Back</Button>
            </Stack>
        </form>
    )
}