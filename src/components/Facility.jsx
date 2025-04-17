import { Card, CardContent, Typography } from "@mui/material";

export default function Facility({name, address, description, imgSrc, hours, openStatus}) {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}