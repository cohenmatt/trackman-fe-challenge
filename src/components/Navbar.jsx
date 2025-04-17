import { AppBar, Button, Stack } from "@mui/material";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Stack direction="row" spacing={2} sx={{ py: 1, px: 1 }}>
                <img src={logo} alt="logo" width={50}/>
                <Button variant="contained" onClick={() => navigate("/")}>Facilities</Button>
                <Button variant="contained" disabled>Locations</Button>
                <Button variant="contained" disabled>Players</Button>
                <Button variant="contained" disabled>Access Management</Button>
            </Stack>
        </AppBar>
    );
}
