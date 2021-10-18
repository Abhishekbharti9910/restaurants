import burger from './assetsDir/burger.png'
import donut from './assetsDir/donut.png'
import combo from './assetsDir/combo.png'


    function homeContent(){
    const content = document.querySelector("#hero");
    const home = document.createElement("div");
    home.id = "home-page";
    home.classList.add("page");
    content.append(home);
    let homeChild2 = document.createElement("div");
    let homeChild3 = document.createElement("div");
    let orderElement = document.createElement("h2");
    let child3Text = document.createElement("h1");
    child3Text.innerHTML = "We serve the street taste to your door step";
    homeChild2.appendChild(child3Text);
    let paraDiv = document.createElement("div");
    let para = document.createElement("p");
    para.innerHTML = 'Dilever street food from your local favourite in a instant';
    paraDiv.appendChild(para);

    homeChild2.classList.add("homeChild2");
    homeChild3.classList.add("homeChild3");
    home.appendChild(homeChild2);
    home.appendChild(homeChild3);

    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    img1.src = burger;
    img1.id = "burger";
    img2.src =donut;
    img2.id = "donut";
    img3.src = combo;
    img3.id = "combo";
    homeChild3.appendChild(img3);
    homeChild3.appendChild(paraDiv);
    home.appendChild(img1);
    home.appendChild(img2);
    
    }
export default homeContent;