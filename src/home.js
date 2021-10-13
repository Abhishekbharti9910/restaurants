import burger from './assetsDir/burger.png'
import donut from './assetsDir/donut.png'
import combo from './assetsDir/combo.png'


    function heroContent(){
    const hero = document.querySelector("#hero");
    let heroChild2 = document.createElement("div");
    let heroChild3 = document.createElement("div");
    let orderElement = document.createElement("h2");
    let child3Text = document.createElement("h1");
    child3Text.innerHTML = "We serve the street taste to your door step";
    heroChild2.appendChild(child3Text);
    let paraDiv = document.createElement("div");
    let para = document.createElement("p");
    para.innerHTML = 'Dilever street food from your local favourite in a instant';
    paraDiv.appendChild(para);
    hero.id = "hero";
    heroChild2.classList.add("heroChild2");
    heroChild3.classList.add("heroChild3");
    hero.appendChild(heroChild2);
    hero.appendChild(heroChild3);

    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    img1.src = burger;
    img1.id = "burger";
    img2.src =donut;
    img2.id = "donut";
    img3.src = combo;
    img3.id = "combo";
    heroChild3.appendChild(img3);
    heroChild3.appendChild(paraDiv);
    hero.appendChild(img1);
    hero.appendChild(img2);
    
}
export default heroContent;