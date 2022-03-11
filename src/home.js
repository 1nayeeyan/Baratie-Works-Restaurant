
function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const homeCover = document.createElement('div');
    homeCover.classList.add('home-cover');

    const homeTitle = createHeading("Baratie");
    homeTitle.classList.add('home-res-name')

    homeCover.appendChild(createHeading("Welcome To"));
    homeCover.appendChild(homeTitle);
    homeCover.appendChild(createParagraph("East Blue's very own restaurant on the sea. Our specialty lies in Seafood dishes, our chefs take inspiration from ingredients in the sea around us, your visit to the Baratie is bound to be one to remember."));

    home.appendChild(homeCover);

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function createHeading(text) {
    const heading = document.createElement("h2");
    heading.textContent = text;
    return heading;
}


function loadHome() {
    const main = document.getElementById("main");
    main.appendChild(createHome());
}
  
export default loadHome;