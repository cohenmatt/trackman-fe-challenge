import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addFacility } from "../features/facilityList/facilityListSlice";

export default function FacilityEdit() {
    const { control, handleSubmit } = useForm();
    const goTo = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(addFacility(data));
        alert(JSON.stringify(data));
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" spacing={2} sx={{p: 2}}>
            <Controller
                name="id"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField {...field} label="ID" variant="outlined" />
                )}
            />
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField {...field} label="Name" variant="outlined" />
                )}
            />
            <Controller
                name="address"
                control={control}
                defaultValue=""
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