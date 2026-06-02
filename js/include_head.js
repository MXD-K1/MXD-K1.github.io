const meta = document.createElement("meta");
meta.setAttribute("charset", "utf-8");
document.head.appendChild(meta);

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./style.css";
document.head.appendChild(link);

const iconLink = document.createElement("link");
iconLink.rel = "stylesheet";
iconLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
document.head.appendChild(iconLink);
