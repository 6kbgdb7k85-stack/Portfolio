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
        height: "100dvh",
        padding: "0 !important",
        display:"flex",
        flexDirection:"column"
      }}
    >
      <AppBar position="static" sx={{ pt:"1rem" }}>
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
      <Box sx={{ padding:'.5rem', overflow:"scroll", flexGrow:1}}>
        <Outlet />
      </Box>
      <Box sx={{width:"100%",backgroundColor: palette.primary.main}}>
        <Typography align="center" variant="h6" sx={{color:palette.primary.contrastText}}>&copy; 2026 Nathan Baggs</Typography>
      </Box>
    </Container>
  );
}

export default App;
