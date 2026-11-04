import {
  AppBar,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import AboutCard from "./components/AboutCard";
import HeadlineCard from "./components/HeadlineCard";
import ResumeCard from "./components/ResumeCard";
import ExpertiseCard from "./components/ExpertiseCard";
import ContactCard from "./components/ContactCard";

function App() {
  const { palette } = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: palette.background.default,
        minHeight: "100dvh",
        padding: "0 !important",
      }}
    >
      <AppBar position="static">
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Nathan Baggs
        </Typography>
      </AppBar>
      <Grid container spacing={1} sx={{padding:"1rem"}}>
        <Grid size={{ xs: 6, md: 4 }}>
          <Stack spacing={1}>
            <HeadlineCard />
            <ExpertiseCard />
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <AboutCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Grid container spacing={1}>
            <Grid size={6}>
              <ResumeCard />
            </Grid>
            <Grid size={6}>
              <ContactCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
