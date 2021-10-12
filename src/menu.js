// making body slidable
const scrollOn = ()=>{
    body.style.overflow = "auto";
}
const heroContent = ()=>{
    const hero = document.createElement("div");
    let child1 = document.createElement("div");
    hero.id = "hero";
    child1.classList.add("heroChild");
    hero.appendChild(child1);
    return hero;
}

export default heroContent();
