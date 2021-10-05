import './style.css';


const website = function() {
    const content = document.createElement("h1");
content.id = "content";
content.innerHTML = "Street Stalker";
document.body.appendChild(content);

const para = document.createElement("p");
para.innerHTML = "A Hey buddy hoW are you";
document.body.appendChild(para);
}