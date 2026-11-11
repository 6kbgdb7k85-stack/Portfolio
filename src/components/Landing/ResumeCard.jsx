import { Description } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import downloadFile from "../../common/utils/downloadFile";
import { RESUME_PATH } from "../../common/constants";

export default function ResumeCard() {

  return (
    <Card>
      <CardHeader title="Resume" />
      <CardContent>
        <IconButton color="inherit" size="large" onClick={()=>downloadFile(RESUME_PATH,RESUME_NAME)}>
          <Description />
        </IconButton>
      </CardContent>
    </Card>
  );
}
