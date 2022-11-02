import {onPageLoad} from './home.js';
import {menuPageLoad} from './menu.js';
import {aboutPageLoad} from './about.js';

export function contactPageLoad() {
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
    headerContentContainer.appendChild(homeHeader);
    const menuHeader = document.createElement('p');
    homeHeader.setAttribute('id', 'home')
    menuHeader.innerText = 'MENU';
    menuHeader.setAttribute('id', 'menu')
    headerContentContainer.appendChild(menuHeader);
    const aboutHeader = document.createElement('p');
    aboutHeader.innerText = 'ABOUT';
    aboutHeader.setAttribute('id', 'about')
    headerContentContainer.appendChild(aboutHeader);
    const contactHeader = document.createElement('p');
    contactHeader.innerText = 'CONTACT';
    contactHeader.setAttribute('id', 'contact');
    contactHeader.setAttribute('class', 'selected')
    headerContentContainer.appendChild(contactHeader);
    header.appendChild(headerLogo);
    header.appendChild(headerContentContainer);

    const hero = document.createElement('div');
    hero.setAttribute('class', 'hero');
    const heroContent = document.createElement('div');
    heroContent.setAttribute('class', 'contact-content');
    const contactTitle = document.createElement('h4');
    contactTitle.innerText = 'Telephone: 123456789';
    const contactText = document.createElement('h4');
    contactText.innerText = `Email: asdfasdf@asdaf.com`;
    hero.appendChild(heroContent);
    heroContent.appendChild(contactTitle);
    heroContent.appendChild(contactText);


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

    const aboutClick = document.getElementById('about');
    aboutClick.addEventListener('click', () => console.log(aboutClick));
    aboutClick.addEventListener('click', aboutPageLoad);

}

