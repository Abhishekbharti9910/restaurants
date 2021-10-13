import './menuStyle.css';
import burger from './assetsDir/food_item/burger.jpg';
import icecream from './assetsDir/food_item/icecream.jpg';
import kebabas from './assetsDir/food_item/kebabs.jpg';
import hotdog from './assetsDir/food_item/hotdog.jpg';
import jhalmuri from './assetsDir/food_item/jhalmuri.jpg';
import tteokbokki from './assetsDir/food_item/tteokbokki.jpg';
const foodImageArr = [burger,icecream,kebabas,hotdog,jhalmuri,tteokbokki];
// making body slidable
const scrollOn = ()=>{
    body.style.overflow = "auto";
}
const menuItemCreater = (pic, infoContent, i)=>{
    const item = document.createElement("div");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("dish-pic"); 
    const image = new Image();
    image.src = pic;
    image.classList.add("dish-image-tag")
    imageDiv.appendChild(image);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("dish-info"); 
    const para = document.createElement("p");
    para.innerHTML = infoContent;
    infoDiv.appendChild(para);

    item.classList.add("menu-items");
    item.id = `item${i}`;
    item.appendChild(imageDiv);
    item.appendChild(infoDiv);
    return item;
}
const para = "ssdgsgdfgsdhsd";

const heroContent = ()=>{
    const content = document.querySelector("#content");
    const menuBar = document.createElement("div");
    menuBar.id = "menu-bar";
    for (let i = 0; i < 6; i++) {
        menuBar.appendChild(menuItemCreater(foodImageArr[i], para, i));        
    }
    content.appendChild(menuBar);
}

export default heroContent;
