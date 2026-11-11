import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import AboutCard from "./components/Landing/AboutCard";
import HeadlineCard from "./components/Landing/HeadlineCard";
import ResumeCard from "./components/Landing/ResumeCard";
import ExpertiseCard from "./components/Landing/ExpertiseCard";
import ContactCard from "./components/Landing/ContactCard";
import Projects from "./components/Landing/Projects";
import { Outlet, useNavigate } from "react-router";
import { Home } from "@mui/icons-material";

function App() {
  const { palette } = useTheme();

  const navigate = useNavigate();

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: palette.background.default,
        minHeight: "100dvh",
        padding: "0 !important",
      }}
    >
      <AppBar position="static" sx={{ mb: "2rem" }}>
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => navigate("/")}
          >
            <Home />
          </IconButton>
          <Typography variant="h2" sx={{ textAlign: "center", flexGrow: 1 }}>
            Nathan Baggs
          </Typography>
        </Toolbar>

        <Stack direction={"row"} sx={{ ml: "auto", mr: "1rem" }}>
          <Button color="inherit" onClick={() => navigate("about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate("projects")}>
            Portfolio
          </Button>
          <Button color="inherit" onClick={() => navigate("resume")}>
            Resume
          </Button>
          <Button color="inherit" onClick={() => navigate("skills")}>
            Skills
          </Button>
        </Stack>
      </AppBar>
      <Box sx={{pl:"1rem",pr:"1rem"}}>
        <Outlet />
      </Box>
    </Container>
  );
}

export default App;
