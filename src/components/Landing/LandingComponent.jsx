import { Box, Grid, Stack } from "@mui/material";
import Projects from "./Projects";
import ContactCard from "./ContactCard";
import ResumeCard from "./ResumeCard";
import AboutCard from "./AboutCard";
import ExpertiseCard from "./ExpertiseCard";
import HeadlineCard from "./HeadlineCard";
import getTopProjects from "../../common/utils/getTopProjects";
import ProjectCard from "./ProjectCard";

export default function LandingComponent() {
  return (
    <Stack spacing={1}>
    {/* <Box className="landing-layout">
    <Box className="landing-headline">
      <HeadlineCard />
    </Box>

    <Box className="landing-stack landing-about">
      <AboutCard />
      <ResumeCard />
    </Box>

    <Box className="landing-stack landing-contact">
      <ContactCard />
      <ExpertiseCard />
    </Box>
  </Box> */}
    <Grid container spacing={1}>
      <Grid size={{md:6,lg:4}}>
        <HeadlineCard/>
      </Grid>
      <Grid size={{md:6,lg:4}}>
        <AboutCard/>
      </Grid>
      <Grid size={{md:12,lg:4}}>
        <Stack spacing={1}>
          <Grid container spacing={1}>
            <Grid size={6}>
              <ResumeCard/>
            </Grid>
            <Grid size={6}>
              <ContactCard/>
            </Grid>
          </Grid>
          <ExpertiseCard/>
        </Stack>
      </Grid>
      {getTopProjects().map((project,index) => (
        <Grid key={`project-${index+1}`} size={{ xs: 12, md: 4 }}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
    </Stack>
  );
}
