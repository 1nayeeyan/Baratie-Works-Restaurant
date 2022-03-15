function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(newMenuItem('Egg Fried Rice', './images/eggfriedrice-dish.jpg', 'Perfect as a side'));
    menu.appendChild(newMenuItem('Salmon en Frite', './images/salmon-dish.png', 'Freshly served Salmon on a plate of noodles'));
    menu.appendChild(newMenuItem('Reindeer Leg', './images/meat-dish.jpeg', 'A Filling and Savoury choice for meat lovers'));
    menu.appendChild(newMenuItem('Onigiri (Rice Ball)', './images/onigiri-dish.png', 'A Light, Sweet Snack'));
    menu.appendChild(newMenuItem('Miso Ramen', './images/ramen-dish.png', 'A classic Japanese favourite'));
    menu.appendChild(newMenuItem('Soba', './images/soba-dish.png', 'Savoury Soy Noodles'))

    return menu;
}

function newMenuItem(name, imageSource, desc){
    const foodItem = document.createElement('div');
    foodItem.classList.add('food-item');
    
    const foodName = document.createElement('h3');
    foodName.textContent = name;
    const foodImg = document.createElement('img')
    foodImg.setAttribute('src', imageSource);
    const foodDesc = document.createElement('p');
    foodDesc.textContent = desc;

    foodItem.appendChild(foodName);
    foodItem.appendChild(foodImg);
    foodItem.appendChild(foodDesc);

    return foodItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.appendChild(createMenu());
}
  
export default loadMenu;