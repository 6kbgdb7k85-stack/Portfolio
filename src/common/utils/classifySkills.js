import { SKILLS_MAP } from "../constants"

export default function classifySkills(skills){
    const frontend=[]
    const backend=[]
    const other=[]
    skills.forEach(skill=>{
        if (SKILLS_MAP[skill.replace(" ","_").toUpperCase()]===true){
            frontend.push(skill)
        }else if (SKILLS_MAP[skill.replace(" ","_").toUpperCase()]===false){
            backend.push(skill)
        }else{
            console.warn(`skill \"${skill}\" not mapped`)
            other.push(skill)
        }
    })
    return {frontend,backend}
}