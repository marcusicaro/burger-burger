import {onPageLoad} from './home.js';
import {menuPageLoad} from './menu.js';
import {contactPageLoad} from './contact'

export function aboutPageLoad() {
    const content = document.querySelector('#content')
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
    headerContentContainer.appendChild(homeHeader);
    const menuHeader = document.createElement('p');
    menuHeader.innerText = 'MENU';
    headerContentContainer.appendChild(menuHeader);
    const aboutHeader = document.createElement('p');
    aboutHeader.innerText = 'ABOUT';
    aboutHeader.setAttribute('class', 'selected')
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
    heroContent.setAttribute('class', 'about-content');
    const aboutTitle = document.createElement('h3');
    aboutTitle.innerText = 'Burger Burger';
    const aboutText = document.createElement('p');
    aboutText.innerText = `This is the about section of the burger burger, best burger in the burger. Looking for a tasty burger? Burger Burger is your choice. Wanna eat a very delicious burger? It's Burger Burger you want.`;
    hero.appendChild(heroContent);
    heroContent.appendChild(aboutTitle);
    heroContent.appendChild(aboutText);


    const footer = document.createElement('footer');
    footer.textContent = 'Some footer text';

    content.appendChild(header);
    content.appendChild(hero);
    content.appendChild(footer);

    const homeClick = document.getElementById('home');
    homeClick.addEventListener('click', () => console.log(homeClick));
    homeClick.addEventListener('click', onPageLoad);

    const menuClick = document.getElementById('menu');
    menuClick.addEventListener('click', () => console.log(menuClick));
    menuClick.addEventListener('click', menuPageLoad);

    const contactClick = document.getElementById('contact');
    contactClick.addEventListener('click', () => console.log(contactClick));
    contactClick.addEventListener('click', contactPageLoad);
    }

