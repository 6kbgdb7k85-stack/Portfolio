import { Typography } from "@mui/material";

export default function ResumeHeaderComponent({title}){
    return <Typography variant="h5" color="secondary" sx={{mt:"1rem"}}>{title}</Typography>
}