import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FacilityEdit() {
    const goTo = useNavigate();

    return(
        <>
        <h1>Success</h1>
        <Button variant="contained" onClick={() => goTo("/")}>Back</Button>
        </>
    );
}