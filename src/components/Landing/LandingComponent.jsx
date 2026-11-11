import { Grid, Stack } from "@mui/material";
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
    <Grid container spacing={1}>
      <Grid size={{ xs: 6, md: 4 }}>
        <HeadlineCard />
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Stack spacing={1}>
          <AboutCard />
          <ResumeCard />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Stack spacing={1}>
          
          <ContactCard />
          <ExpertiseCard />
        </Stack>
      </Grid>
      {getTopProjects().map((project,index) => (
        <Grid key={`project-${index+1}`} size={{ xs: 12, md: 4 }}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
}
