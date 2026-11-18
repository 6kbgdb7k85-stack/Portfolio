import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AboutCard() {
  const navigate = useNavigate();

  return (
    <Card sx={{height:"100%", display:"flex", flexDirection:"column"}}>
      <CardHeader title="About" />
      <CardContent sx={{ textIndent: "2rem", flexGrow:1 }}>
        <Typography variant="body1" component="p">
          Before I could talk, I learned how to make a computer respond to my
          command. It was just emptying the trash, but to an almost 2 year-old,
          it was pure magic! A few years later, another marvel of technology
          captivated me - the "Back to the Future" DeLorean time machine...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ ml: "auto" }}
          variant="contained"
          onClick={() => navigate("about")}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
