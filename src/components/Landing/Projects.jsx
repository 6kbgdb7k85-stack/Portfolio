import { Grid, Typography } from "@mui/material";
import { PROJECTS } from "../../common/constants";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <Typography variant="h3" sx={{textAlign:"center", mb:"1rem"}}>Portfolio</Typography>
      <Grid container spacing={1}>
        {PROJECTS.map((project) => (
          <Grid key={`${project.name}-card`} size={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
