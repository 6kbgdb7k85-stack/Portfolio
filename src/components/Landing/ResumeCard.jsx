import { Description } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import downloadFile from "../../common/utils/downloadFile";
import { RESUME, RESUME_NAME } from "../../common/constants";
import { useNavigate } from "react-router";

export default function ResumeCard() {
  const navigate = useNavigate()

  return (
    <Card sx={{height:"100%"}}>
      <CardHeader title="Resume" />
      <CardContent>
        <IconButton color="inherit" size="large" onClick={()=>navigate("/resume")}>
          <Description />
        </IconButton>
      </CardContent>
    </Card>
  );
}
