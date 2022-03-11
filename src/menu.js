function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    return menu;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.appendChild(createMenu());
}
  
export default loadMenu;