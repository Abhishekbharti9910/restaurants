import './menuStyle.css';
import burger from './assetsDir/food_item/burger.jpg';
import icecream from './assetsDir/food_item/icecream.jpg';
import kebabas from './assetsDir/food_item/kebabs.jpg';
import hotdog from './assetsDir/food_item/hotdog.jpg';
import jhalmuri from './assetsDir/food_item/jhalmuri.jpg';
import tteokbokki from './assetsDir/food_item/tteokbokki.jpg';
const foodImageArr = [burger,icecream,kebabas,hotdog,jhalmuri,tteokbokki];
const dishName = ["burger","icecream","kebabas","hotdog","jhalmuri","tteokbokki"];
const foodDetails = [
    "we offer you a grass-fed burger made with the highest quality ingredients that we source as locally as possible. ",
    "31 flavors We've got way more including peach, pumpkin, even coconut-avocado.",

    "Kebabs consist of cut up or ground meat, sometimes with vegetables, and various other accompaniments according to the specific recipe. Although kebabs are typically cooked on a skewer over a fire, some kebab dishes are baked in a pan in an oven or prepared as a stew such as tas kebab.",
    
    "A hot dog is a dish consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. The term hot dog can also refer to the sausage itself. The sausage used is a wiener or a frankfurter. ",
    
    "Jhalmuri is popular Indian snacks, It has spicy and tangy flavour we called it chatpata. Jhalmuri can be prepared in very minimal time. It is made of puffed rice vegetable and some spices. ",

    "It is made with rice cakes (garaetteok, cylinder-shaped rice cake), fish cakes, boiled egg, and seasoned with chile paste. The rice cakes are chewy and tender. It looks super spicy and, originally, it is! But you can control the amount of chile paste. You might be able to find it easily at food vendors on the street of Korea. There are always delicious dukbokki boiling and ready to go. Garnish with sesame seeds if you like."
]
// making body slidable


const menuItemCreater = (pic, infoContent, i, dish)=>{
    const item = document.createElement("div");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("dish-pic"); 
    const image = new Image();
    image.src = pic;
    image.classList.add("dish-image-tag")
    imageDiv.appendChild(image);

    const infoDiv = document.createElement("div");
    const node = document.createElement("div");
    const btn = document.createElement("button");
    const node2 = document.createElement("div");

    btn.id = "order-btn";
    btn.innerHTML = "order now";
    node2.appendChild(btn);

    node.id = "para-dish-info";
    const dishNameDiv = document.createElement("div");
    const dishNameH2 = document.createElement("h2");
    dishNameH2.innerHTML = dish;
    dishNameDiv.appendChild(dishNameH2);
    
    infoDiv.classList.add("dish-info"); 
    const para = document.createElement("p");
    para.innerHTML = infoContent;
    node.appendChild(para);

    infoDiv.appendChild(dishNameDiv);
    infoDiv.appendChild(node);
    infoDiv.appendChild(node2);

    item.classList.add("menu-items");
    item.id = `item${i}`;
    item.appendChild(imageDiv);
    item.appendChild(infoDiv);
    
    return item;
}
const para = "ssdgsgdfgsdhsd";

const heroContent = ()=>{
    const hero = document.querySelector("#hero");
    const menuBar = document.createElement("div");
    menuBar.id = "menu-page";
    menuBar.classList.add("page");
    for (let i = 0; i < 6; i++) {
        menuBar.appendChild(menuItemCreater(foodImageArr[i], foodDetails[i], i, dishName[i]));        
    }
    hero.append(menuBar);
}

export default heroContent;
