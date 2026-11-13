import { GitHub, Language, Web } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import handleLinkClick from "../../common/utils/handleLinkClick";
import classifySkills from "../../common/utils/classifySkills";

export default function ProjectCard({ project }) {
  const { name, description, stack, link, github, demoCreds } = project;
  const { frontend, backend } = classifySkills(stack);
  const skillGroups = [
    { title: "Frontend", skills: frontend },
    { title: "Backend", skills: backend },
  ].filter((group) => group.skills.length > 0);
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea
        onClick={() => handleLinkClick(link)}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <CardHeader
          title={name}
          sx={{ pb: ".5rem", pt: ".5rem" }}
        />
        <CardContent sx={{ pt: ".5rem", flexGrow: 1 }}>
          <Typography variant="body1">{description}</Typography>
          {demoCreds && (
            <Typography variant="body2" sx={{ textIndent: "2rem" }}>
              You can create an account or use the demo account provided in the
              footer.
            </Typography>
          )}
          <Typography variant="h6" align="center">
            Stack
          </Typography>
          <Grid
          container
          >
            {skillGroups.map(({ title, skills }, index) => (
              <Grid
                key={title}
                size={12 / skillGroups.length}
                sx={{ display: "flex" }}
              >
                <Stack
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  {skillGroups.length>1&&(<Typography
                    variant="body1"
                    align="center"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    <u>{title}</u>
                  </Typography>)}
                  <ul>
                    {skills.map((skill) => (
                      <li key={skill}>
                        <Typography variant="body1">{skill}</Typography>
                      </li>
                    ))}
                  </ul>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => handleLinkClick(github)}
          variant="contained"
          startIcon={<GitHub />}
        >
          Repository
        </Button>
        <Button
          onClick={() => handleLinkClick(link)}
          variant="contained"
          startIcon={<Language />}
        >
          Live
        </Button>
        {demoCreds && (
          <Stack>
            <Typography variant="body2">
              Username: {demoCreds.username}
            </Typography>
            <Typography variant="body2">
              Password: {demoCreds.password}
            </Typography>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
}
