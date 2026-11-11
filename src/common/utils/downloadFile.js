export default function downloadFile(path,fileName){
    const link = document.createElement("a");
    link.href = path;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}