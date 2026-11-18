import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import image from "/src/assets/self-with-delorean.jpeg";

export default function HeadlineCard() {
  return (
    <Card sx={{ height: "100%", display:"flex",flexDirection: "column", }}>
      <CardMedia
        component={"img"}
        sx={{ height: "15rem", objectPosition: "50% 50%" }}
        image={image}
        title="Nathan image"
      />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pb:"0 !important",
          pt:"0 !important"
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Senior Software Engineer
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Full Stack Development
        </Typography>
      </CardContent>
    </Card>
  );
}
