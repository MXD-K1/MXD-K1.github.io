const header = document.createElement("header");
fetch("./shared/header.html")
    .then(res => res.text())
    .then(data => header.innerHTML = data);
document.body.prepend(header);

const footer = document.createElement("footer");
fetch("./shared/footer.html")
    .then(res => res.text())
    .then(data => footer.innerHTML = data);
document.body.appendChild(footer);
