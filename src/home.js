import burger from './assetsDir/burger.png'
import donut from './assetsDir/donut.png'
import combo from './assetsDir/combo.png'
// making body slidable
const scrollOff = ()=>{
    body.style.overflow = "hidden";
}
function heroContent(){
    scrollOff();
    const hero = document.createElement("div");
    let child1 = document.createElement("div");
    // let child2 = document.createElement("div");
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
    hero.id = "hero";
    child1.classList.add("heroChild");
    child3.classList.add("heroChild");
    child4.classList.add("heroChild");
    hero.appendChild(child1);
    hero.appendChild(child3);
    hero.appendChild(child4);

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
const home = heroContent();
export default home;