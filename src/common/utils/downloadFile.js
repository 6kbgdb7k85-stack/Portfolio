export default function downloadFile(path,fileName){
    const link = document.createElement("a");
    link.href = path;
    link.setAttribute("download", fileName);
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}