import { Description } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import downloadFile from "../../common/utils/downloadFile";
import { RESUME_NAME } from "../../common/constants";
import resume from '/src/assets/Nathan_Baggs_Resume.pdf';

export default function ResumeCard() {

  return (
    <Card>
      <CardHeader title="Resume" />
      <CardContent>
        <IconButton color="inherit" size="large" onClick={()=>downloadFile(resume,RESUME_NAME)}>
          <Description />
        </IconButton>
      </CardContent>
    </Card>
  );
}
