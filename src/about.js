function createAbout(){
    const about = document.createElement('div');
    about.classList.add('about');

    const aboutzeff = document.createElement('div');
    aboutzeff.classList.add('about-zeff')
   
    const zeff = document.createElement("img");
    zeff.setAttribute("src", "./images/owner-zeff-full.png");

    const aboutsanji = document.createElement('div');
    aboutsanji.classList.add('about-sanji')
    const sanji = document.createElement("img");
    sanji.setAttribute("src", "./images/sanji-full.png");

    aboutzeff.appendChild(createHeading('Owner Zeff'));
    aboutzeff.appendChild(zeff);
    aboutzeff.appendChild(createParagraph('Owner Zeff, otherwise known as Red-Leg from his pirate days, is the head chef and owner of the Baratie. Zeff was a tough former pirate. He is hard on those around him and is always serious about everything. Zeff normally does not show emotions other than a hot temper and has a firm hold of authority at the Baratie. Despite his fierce temper, Zeff is also very compassionate. When he and Sanji were shipwrecked on a rocky island at sea, he chose to hand over all his remaining food supply to Sanji, keeping none to himself, instead eating his own leg to fulfill his hunger.'));
    
    aboutsanji.appendChild(createHeading('Sous Chef Sanji'));
    aboutsanji.appendChild(sanji);
    aboutsanji.appendChild(createParagraph('Both Zeff and a nine year old Sanji were stranded on a rock for 85 days. During this time, Zeff discussed with Sanji the idea of starting a restaurant floating on the sea, and Sanji promised that if they survived, he would help Zeff achieve that goal. After enduring the pain of hunger, Sanji grew to adopt the morals shared by Zeff, all customers would be welcome, no matter how villanous they were, because the pain of hunger is unbearable.'));

    about.appendChild(aboutzeff);
    about.appendChild(aboutsanji);
    return about;
}

function createHeading(text) {
    const heading = document.createElement("h2");
    heading.textContent = text;
    return heading;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadAboutUs() {
    const main = document.getElementById("main");
    main.appendChild(createAbout());
}
  
export default loadAboutUs;