import './style.css';
import Icon from './assetsDir/logo.png';
import burger from './assetsDir/burger.png'
import donut from './assetsDir/donut.png'
import combo from './assetsDir/combo.png'


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
    logoInHead.id = "logoDiv";
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
    let child4 = document.createElement("div");
    let orderElement = document.createElement("h2");
    let child3Text = document.createElement("h1");
    child3Text.innerHTML = "We serve the street taste to your door step";
    child3.appendChild(child3Text);
    let paraDiv = document.createElement("div");
    let para = document.createElement("p");
    para.innerHTML = 'Dilever street food from your local favourite in a instant';
    paraDiv.appendChild(para);
    orderElement.innerHTML = "ORDER";
    hero.id = "hero";
    child1.classList.add("heroChild");
    child2.classList.add("heroChild");
    child3.classList.add("heroChild");
    child4.classList.add("heroChild");
    child2.classList.add("pulse");
    hero.appendChild(child1);
    hero.appendChild(child2);
    hero.appendChild(child3);
    hero.appendChild(child4);
    child2.appendChild(orderElement);
    // adding img to hero content
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    img1.src = burger;
    img1.id = "burger";
    img2.src =donut;
    img2.id = "donut";
    img3.src = combo;
    img3.id = "combo";
    child4.appendChild(img3);
    child4.appendChild(paraDiv);
    hero.appendChild(img1);
    hero.appendChild(img2);
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
