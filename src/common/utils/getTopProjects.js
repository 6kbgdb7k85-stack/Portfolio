import { PROJECTS } from "../constants";

export default function getTopProjects(){
    return PROJECTS.filter(project=>!!project.top).sort((a,b)=>a.top-b.top)
}