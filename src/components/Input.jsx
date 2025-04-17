import { TextField, Typography } from "@mui/material";

export default function Input({id, label}) {
    console.log(label);
    return(
        <>
        <Typography variant="body2">{label}</Typography>
        <TextField id={id} variant="outlined"></TextField>
        </>
    );
}