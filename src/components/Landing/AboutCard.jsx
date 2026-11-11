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
    <Card>
      <CardHeader title="About" />
      <CardContent sx={{ textIndent: "2rem" }}>
        <Typography variant="body1" component="p">
          Before I could talk, I learned how to make a computer respond to my
          command...
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
