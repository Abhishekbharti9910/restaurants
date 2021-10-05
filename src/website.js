import './style.css';
import Icon from './assetsDir/logo.png';


const btnCreation = (btnName)=>{
    const Btn = document.createElement("button");
    Btn.id = btnName;
    Btn.classList.add("btn");
    Btn.innerHTML = btnName;
    return Btn;
}


const anchorTagCreater = (link)=>{
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    return a;
}


const logoMaker = ()=>{
    const logoInHead = document.createElement("div");
    logoInHead.id = "logoDiv"
    const logoAnchor = anchorTagCreater("home");
    logoInHead.appendChild(logoAnchor);
    const logo = new Image();
    logo.src= Icon;
    logo.id = "logo";
    logoAnchor.appendChild(logo);
    return logoInHead;
}

const heroContent = ()=>{
    const hero = document.createElement("div");
    let child1 = document.createElement("div");
    let child2 = document.createElement("div");
    let child3 = document.createElement("div");
    hero.id = "hero";
    child1.classList.add("heroChild");
    // let road = document.createElement("div");
    // road.classList.add("road");
    // child1.appendChild(road);
    child2.classList.add("heroChild");
    child3.classList.add("heroChild");
    hero.appendChild(child1);
    hero.appendChild(child2);
    hero.appendChild(child3);
    return hero;
}

const header = ()=>{
    const header = document.createElement("div");
    header.classList.add("header");
    const nav = document.createElement("nav");
// logo added in header
    let logoInHead = logoMaker();
    header.appendChild(logoInHead);

// button created and added in navbar
    const homeBtn = btnCreation("home");
    const menuBtn = btnCreation("menu");
    const contactBtn = btnCreation("contact");
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    header.appendChild(nav);

    return header;
}


// logo heading
const heading = ()=>{
    let navElement = document.createElement("h1");
    navElement.innerHTML = "Street Stalker";
    const content = document.getElementById("content");
    return navElement;
}


const initialise = function () {
    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);

    // header addin
    content.appendChild(header());

    // heading
    content.appendChild(heading());

    //home page hero content
    content.appendChild(heroContent());
}

const website = (()=>{
    initialise();

    
})();
