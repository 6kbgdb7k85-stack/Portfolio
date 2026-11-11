import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function HeadlineCard(){

    return (
        <Card>
            <CardMedia
                component={"img"}
                sx={{height:"15rem", objectPosition:"50% 50%"}}
                image="src/assets/self-with-delorean.jpeg"
                title="Nathan image"
            />
            <CardContent>
                <Typography variant="h6" sx={{fontWeight:"bolder"}}>Senior Software Engineer</Typography>
                <Typography variant="h6" sx={{fontWeight:"bolder"}}>Full Stack Development</Typography>
            </CardContent>
        </Card>
    )
}