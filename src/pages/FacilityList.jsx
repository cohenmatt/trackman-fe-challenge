import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function FacilityList() {
    return (
        <>
        <Grid container spacing={2}>
            <Grid size={4}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography>
                            Test
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={4}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography>
                            Test
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={4}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography>
                            Test
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </>
    );
}