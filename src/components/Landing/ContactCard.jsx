import {
  Email,
  GitHub,
  Home,
  LinkedIn,
  Phone,
  Place,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import handleLinkClick from "../../common/utils/handleLinkClick";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../common/constants";

export default function ContactCard() {
  return (
    <Card>
      <CardHeader title="Contact" />
      <CardContent>
        <Stack direction={"row"}>
          <Phone />
          <Typography variant="body1">(804) 687-5911</Typography>
        </Stack>
        <Stack direction={"row"}>
          < Place/>
          <Typography variant="body1">Charlotte, NC</Typography>
        </Stack>
        <Stack direction={"row"}>
          <IconButton
            color="primary"
            size="large"
            onClick={() => handleLinkClick(GITHUB_URL)}
          >
            <GitHub />
          </IconButton>
          <IconButton
            color="primary"
            size="large"
            onClick={() => handleLinkClick(LINKEDIN_URL)}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            color="primary"
            size="large"
            onClick={() => handleLinkClick(`mailto: ${EMAIL}`)}
          >
            <Email />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
