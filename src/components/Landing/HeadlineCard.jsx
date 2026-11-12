import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import image from '/src/assets/self-with-delorean.jpeg'

export default function HeadlineCard(){

    return (
        <Card sx={{height:"100%"}}>
            <CardMedia
                component={"img"}
                sx={{height:"15rem", objectPosition:"50% 50%"}}
                image={image}
                title="Nathan image"
            />
            <CardContent>
                <Typography variant="h6" sx={{fontWeight:"bolder"}}>Senior Software Engineer</Typography>
                <Typography variant="h6" sx={{fontWeight:"bolder"}}>Full Stack Development</Typography>
            </CardContent>
        </Card>
    )
}