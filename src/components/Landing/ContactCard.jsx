import { GitHub, Home, LinkedIn, Phone } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import handleLinkClick from "../../common/utils/handleLinkClick";
import { GITHUB_URL, LINKEDIN_URL } from "../../common/constants";

export default function ContactCard() {
  return (
    <Card>
      <CardHeader title="Contact" />
      <CardContent>
        <Stack direction={"row"}>
            <Phone/>
            <Typography variant="body1">(804) 687-5911</Typography>
        </Stack>
        <Stack direction={"row"}>
          <Home />
          <Typography variant="body1">4108 LaCrema Dr Charlotte, NC</Typography>
        </Stack>
        <IconButton
            color="primary"
          sx={{ mr: "1rem" }}
          size="large"
          onClick={() => handleLinkClick(GITHUB_URL)}
        >
          <GitHub />
        </IconButton>
        <IconButton color="primary" size="large" onClick={() => handleLinkClick(LINKEDIN_URL)}>
          <LinkedIn />
        </IconButton>
      </CardContent>
    </Card>
  );
}
