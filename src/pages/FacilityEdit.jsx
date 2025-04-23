import { Button, Stack, TextField, Typography, FormControlLabel, Checkbox} from "@mui/material";
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
        goTo("/");
    };

    const params = useParams();
    const isEditMode = params.facilityId !== undefined;

    // TODO: protect against undefined ID?
    const facilityInfo = useSelector(state => state.facilityList.byId[params.facilityId]);
    const isFirstFacility = useSelector(state => state.facilityList.allIds.length < 1);
    const isDefaultId = useSelector(state => state.facilityList.defaultId === params.facilityId);

    console.log("facilityInfo", facilityInfo);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" spacing={2} sx={{p: 2}}>
                <Typography variant="h3">
                    {isEditMode ? "Edit Facility" : "Create a New Facility"}
                </Typography>
                <Controller
                    name="id"
                    control={control}
                    defaultValue={isEditMode ? facilityInfo.id : Math.random().toString(36).slice(2, 10)}
                    render={({ field }) => (
                        <input type="hidden" {...field} />
                    )}
                />
                <Controller
                    name="name"
                    control={control}
                    defaultValue={isEditMode ? facilityInfo.name : ""}
                    render={({ field }) => (
                        <TextField {...field} label="Facility Name" variant="outlined" />
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
                <Controller
                    name="description"
                    control={control}
                    defaultValue={isEditMode ? facilityInfo.description : ""}
                    render={({ field }) => (
                        <TextField {...field}
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={5}
                            maxRows={5} />
                    )}
                />
                <Controller
                    name="imageUrl"
                    control={control}
                    defaultValue={isEditMode ? facilityInfo.imageUrl : ""}
                    render={({ field }) => (
                        <TextField {...field} type="url" label="Cover Image URL" variant="outlined"/>
                    )}
                />
                <Controller
                    name="isDefault"
                    control={control}
                    defaultValue={isEditMode ? isDefaultId : isFirstFacility}
                    render={({ field }) => (
                        <FormControlLabel 
                            control={<Checkbox {...field} checked={field.value} disabled={isFirstFacility || (isDefaultId && isEditMode && !isFirstFacility)}/>} 
                            label={
                                <>
                                    <Typography variant="body1">
                                        Default Facility
                                    </Typography>
                                    <Typography variant="body1" color="#757575">
                                        Setting this facility as default will override the currently marked default facility.
                                    </Typography>
                                </>
                            }
                        />
                    )}
                />
                <Typography variant="h3">
                    Working Hours
                </Typography>
                <Controller
                    name="openingTime"
                    control={control}
                    defaultValue={isEditMode ? facilityInfo.openingTime : ""}
                    render={({ field }) => (
                        <TextField {...field} type="time" label="Opening Time" variant="outlined" />
                    )}
                />
                <Controller
                    name="closingTime"
                    control={control}
                    defaultValue={isEditMode ? facilityInfo.closingTime : ""}
                    render={({ field }) => (
                        <TextField {...field} type="time" label="Closing Time" variant="outlined" />
                    )}
                />
                <Button type="submit">Submit</Button>
                <Button variant="contained" onClick={() => goTo("/")}>Back</Button>
            </Stack>
        </form>
    )
}