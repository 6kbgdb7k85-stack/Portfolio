import { Description } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import downloadFile from "../common/utils/downloadFile";

export default function ResumeCard() {

  return (
    <Card>
      <CardHeader title="Resume" />
      <CardContent>
        <IconButton size="large" onClick={()=>downloadFile("/assets/Nathan_Baggs_Resume.pdf","Nathan Baggs Resume.pdf")}>
          <Description />
        </IconButton>
      </CardContent>
    </Card>
  );
}
