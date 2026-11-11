import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

export default function SkillsPageComponent(){
    return (
        <Grid container spacing={1}>
            <Grid size={12}>
                <Card>
                    <CardHeader title={"Full Stack Development"}/>
                    <CardContent>
                        <Typography variant="body1"><strong>Languages: </strong>JavaScript, TypeScript, Python, SQL</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={4}>
                <Card>
                    <CardHeader title={"Frontend"}/>
                    <CardContent>
                        <ul>
                            <li><Typography variant="body1">React.js</Typography></li>
                            <li><Typography variant="body1">Angular</Typography></li>
                            <li><Typography variant="body1">HTML5</Typography></li>
                            <li><Typography variant="body1">CSS3</Typography></li>
                            <li><Typography variant="body1">Material UI</Typography></li>
                            <li><Typography variant="body1">Bootstrap</Typography></li>
                        </ul>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={4}>
                <Card>
                    <CardHeader title={"Backend and APIs"}/>
                    <CardContent>
                        <ul>
                            <li><Typography variant="body1">Flask</Typography></li>
                            <li><Typography variant="body1">RESTful APIs</Typography></li>
                            <li><Typography variant="body1">Databases</Typography></li>
                            <li><Typography variant="body1">Ruby on Rails</Typography></li>
                        </ul>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={4}>
                <Card>
                    <CardHeader title={"Tools and Practices"}/>
                    <CardContent>
                        <ul>
                            <li><Typography variant="body1">Git</Typography></li>
                            <li><Typography variant="body1">GitHub</Typography></li>
                            <li><Typography variant="body1">AccelQ functional test automation</Typography></li>
                            <li><Typography variant="body1">WCAG</Typography></li>
                        </ul>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}