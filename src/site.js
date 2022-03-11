import loadHome from "./home";
import loadMenu from "./menu";
import loadAboutUs from "./about";

const content = document.getElementById("content");

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const resName = document.createElement("h1");
    resName.classList.add("res-name")
    resName.textContent = "The Baratie"

    header.appendChild(resName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", function(){
        clearMain();
        content.appendChild(createMain());
        loadHome();
        
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", function(){
        clearMain();
        content.appendChild(createMain());
        loadMenu();
    });

    const aboutButton = document.createElement('button');
    aboutButton.classList.add("nav-button");
    aboutButton.textContent = "About Us";
    aboutButton.addEventListener("click", function() {
        clearMain();
        content.appendChild(createMain());
        loadAboutUs();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav

}


function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function clearMain(){
    let content = document.getElementById("content");
    let main = document.getElementById("main");
    return content.removeChild(main);
}

function initializeSite() {
    content.appendChild(createHeader());
    content.appendChild(createMain());
  
    loadHome();
}
  
export default initializeSite;