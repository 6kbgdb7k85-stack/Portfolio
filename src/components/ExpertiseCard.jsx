import { Card, CardContent, CardHeader, Chip, Grid } from "@mui/material";
import { SKILL_LIST } from "../common/constants";

export default function ExpertiseCard() {
  return (
    <Card>
      <CardHeader title="Skills" />
      <CardContent>
        <Grid container spacing={1}>
          {SKILL_LIST.map((skill) => (
            <Grid size={"auto"}>
              <Chip label={skill} variant="filled" />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
