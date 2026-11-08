import { Grid } from "@mui/material";
import { PROJECTS } from "../../common/constants";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Grid container spacing={1}>
      {PROJECTS.map((project) => (
        <Grid key={`${project.name}-card`} size={4}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
}
