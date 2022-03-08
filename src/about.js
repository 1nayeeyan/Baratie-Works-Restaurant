function createAbout(){
    const about = document.createElement('div');
    about.classList.add('about');

    return about;
}

function loadAboutUs() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
}
  
export default loadAboutUs;