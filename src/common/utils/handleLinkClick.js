export default function handleLinkClick(url){
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("target","_blank")
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}