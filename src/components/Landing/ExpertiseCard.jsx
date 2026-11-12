import { Card, CardContent, CardHeader, Chip, Grid } from "@mui/material";
import { SKILL_LIST } from "../../common/constants";

export default function ExpertiseCard() {
  return (
    <Card sx={{flex:1}}>
      <CardHeader title="Skills" />
      <CardContent>
        <Grid container spacing={1}>
          {SKILL_LIST.map((skill) => (
            <Grid key={skill} size={"auto"}>
              <Chip color="primary" label={skill} variant="filled" />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
