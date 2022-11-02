import {menuPageLoad} from './menu.js';
import {aboutPageLoad} from './about.js';
import {contactPageLoad} from './contact'

export function onPageLoad() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const header = document.createElement('header');
    const headerLogo = document.createElement('img');
    headerLogo.setAttribute('src', 'logo.png');
    headerLogo.setAttribute('class', 'logo-image');
    headerLogo.setAttribute('alt', 'burger logo image');

    const headerContentContainer = document.createElement('div');
    headerContentContainer.setAttribute('class', 'header-content')
    const homeHeader = document.createElement('p');

    homeHeader.innerText = 'HOME';
    homeHeader.setAttribute('class', 'selected')
    headerContentContainer.appendChild(homeHeader);
    const menuHeader = document.createElement('p');
    menuHeader.innerText = 'MENU';
    headerContentContainer.appendChild(menuHeader);
    const aboutHeader = document.createElement('p');
    aboutHeader.innerText = 'ABOUT';
    headerContentContainer.appendChild(aboutHeader);
    const contactHeader = document.createElement('p');
    contactHeader.innerText = 'CONTACT';
    headerContentContainer.appendChild(contactHeader);
    header.appendChild(headerLogo);
    header.appendChild(headerContentContainer);

    homeHeader.setAttribute('id', 'home');
    menuHeader.setAttribute('id', 'menu');
    aboutHeader.setAttribute('id', 'about');
    contactHeader.setAttribute('id', 'contact');

    const hero = document.createElement('div');
    hero.setAttribute('class', 'hero');
    const heroContent = document.createElement('div');
    heroContent.setAttribute('class', 'hero-text');
    const heroContentImage = document.createElement('img');
    heroContentImage.setAttribute('src', 'chef.png');
    heroContentImage.setAttribute('class', 'hero-image');
    const heroContentText = document.createElement('p');
    heroContentText.innerHTML = `Wanna try out the best smash burger in the world? <br> This is a mockup webpage, so you won't try it here.</p>`
    hero.appendChild(heroContent);
    heroContent.appendChild(heroContentImage);
    heroContent.appendChild(heroContentText);

    const footer = document.createElement('footer');
    footer.textContent = 'Some footer text';

    content.appendChild(header);
    content.appendChild(hero);
    content.appendChild(footer);

    const menuClick = document.getElementById('menu');
    menuClick.addEventListener('click', () => console.log(menuClick));
    menuClick.addEventListener('click', menuPageLoad);

    const aboutClick = document.getElementById('about');
    aboutClick.addEventListener('click', () => console.log(aboutClick));
    aboutClick.addEventListener('click', aboutPageLoad);

    const contactClick = document.getElementById('contact');
    contactClick.addEventListener('click', () => console.log(contactClick));
    contactClick.addEventListener('click', contactPageLoad);
}

