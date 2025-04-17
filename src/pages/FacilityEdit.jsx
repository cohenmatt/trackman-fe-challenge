import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

export default function FacilityEdit() {
    const goTo = useNavigate();

    return(
        <Box>
            <Typography variant="h3">Create/Edit</Typography>
            <Stack direction="column" spacing={2}>
                <Typography variant="body1" fontWeight="bold">Facility Information</Typography>
                <Input id="facility-name" label="Facility name" />
                <Input id="address" label="Address" />
                <Input id="description" label="Description" />
                <Input id="img-url" label="Cover Image URL" />
            </Stack>
            <Button variant="contained" onClick={() => goTo("/")}>Back</Button>
        </Box>
    );
}