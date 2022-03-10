
function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const homeCover = document.createElement('div');
    homeCover.classList.add('home-cover');

    const homeTitle1 = document.createElement("h2");
    const homeTitle2 = document.createElement("h2");
    homeTitle2.classList.add('home-res-name')

    homeTitle1.textContent = "Welcome to";
    homeTitle2.textContent = "Baratie";

    homeCover.appendChild(homeTitle1);
    homeCover.appendChild(homeTitle2);
    homeCover.appendChild(createParagraph("East Blue's very own restaurant on the sea. Our specialty lies in Seafood dishes, our chefs take inspiration from ingredients in the sea around us, your visit to the Baratie is bound to be one to remember."));

    home.appendChild(homeCover);

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}


function loadHome() {
    const main = document.getElementById("main");
    main.appendChild(createHome());
}
  
export default loadHome;