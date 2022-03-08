
function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    return home;
}

function loadHome() {
    const main = document.querySelector('main')
    main.appendChild(createHome());
}
  
export default loadHome;