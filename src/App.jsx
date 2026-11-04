import { AppBar, Container, Grid, Typography, useTheme } from "@mui/material";
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
      <AppBar position="static" sx={{ mb: "1rem" }}>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Nathan Baggs
        </Typography>
      </AppBar>
      <Grid container spacing={1}>
        <Grid size={{ xs: 12, md: 4 }}>
          <HeadlineCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <AboutCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ResumeCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ExpertiseCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ContactCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
