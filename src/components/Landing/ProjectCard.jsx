import { GitHub, Language, Web } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import handleLinkClick from "../../common/utils/handleLinkClick";

export default function ProjectCard({ project }) {
  const { name, description, stack, link, github, demoCreds } = project;
  return (
    <Card>
      <CardActionArea onClick={() => handleLinkClick(link)}>
        <CardHeader title={name} sx={{borderBottom:"1px solid black", pb:".5rem", pt:".5rem"}}/>
        <CardContent sx={{pt:".5rem"}}>
          <Typography variant="body1">{description}</Typography>
          {demoCreds && (
            <Typography variant="body2" sx={{ textIndent: "2rem" }}>
              You can create an account or use the demo account provided in the
              footer.
            </Typography>
          )}
          <Typography variant="h6">Stack</Typography>
          <ul>
            {stack.map((item) => (
              <li key={`${name}-skill-${item}`}>
                <Typography>{item}</Typography>
              </li>
            ))}
          </ul>
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
