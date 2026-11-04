import { GitHub, LinkedIn } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import handleLinkClick from "../common/utils/handleLinkClick";
import { GITHUB_URL, LINKEDIN_URL } from "../common/constants";

export default function ContactCard(){
    return (
        <Card>
            <CardHeader title="Contact"/>
            <CardContent>
                <IconButton sx={{mr: "1rem"}} size="large" onClick={()=>handleLinkClick(GITHUB_URL)}>
                    <GitHub/>
                </IconButton>
                <IconButton size="large" onClick={()=>handleLinkClick(LINKEDIN_URL)}>
                    <LinkedIn/>
                </IconButton>
            </CardContent>
        </Card>
    )
}