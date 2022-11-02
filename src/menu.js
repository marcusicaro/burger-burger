import {onPageLoad} from './home.js';
import {aboutPageLoad} from './about.js';
import {contactPageLoad} from './contact'

export function menuPageLoad() {
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
    menuHeader.innerText = 'MENU';
    menuHeader.setAttribute('class', 'selected')
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
    heroContent.setAttribute('class', 'hero-content');
    const menuBoxOne = document.createElement('div');
    menuBoxOne.setAttribute('class', 'menu-box');
    const boxOneImage = document.createElement('img');
    boxOneImage.setAttribute('src', 'burger1.jpg');
    boxOneImage.setAttribute('class', 'menu-image');
    const boxOneText = document.createElement('p');
    boxOneText.innerText = 'Delicious hamburger food is good. Hmm tasty.';
    const menuBoxTwo = document.createElement('div');
    menuBoxTwo.setAttribute('class', 'menu-box');
    const boxTwoImage = document.createElement('img');
    boxTwoImage.setAttribute('src', 'burger2.jpg');
    boxTwoImage.setAttribute('class', 'menu-image');
    const boxTwoText = document.createElement('p');
    boxTwoText.innerText = 'Delicious hamburger food is good. Hmm tasty.';
    const menuBoxThree = document.createElement('div');
    menuBoxThree.setAttribute('class', 'menu-box');
    const boxThreeImage = document.createElement('img');
    boxThreeImage.setAttribute('src', 'burger3.jpg');
    boxThreeImage.setAttribute('class', 'menu-image');
    const boxThreeText = document.createElement('p');
    boxThreeText.innerText = 'Delicious hamburger food is good. Hmm tasty.';
    const menuBoxFour = document.createElement('div');
    menuBoxFour.setAttribute('class', 'menu-box');
    const boxFourImage = document.createElement('img');
    boxFourImage.setAttribute('src', 'burger4.jpg');
    boxFourImage.setAttribute('class', 'menu-image');
    const boxFourText = document.createElement('p');
    boxFourText.innerText = 'Delicious hamburger food is good. Hmm tasty.';


    hero.appendChild(heroContent);
    heroContent.appendChild(menuBoxOne);
    menuBoxOne.appendChild(boxOneImage);
    menuBoxOne.appendChild(boxOneText);
    heroContent.appendChild(menuBoxTwo);
    menuBoxTwo.appendChild(boxTwoImage);
    menuBoxTwo.appendChild(boxTwoText);
    heroContent.appendChild(menuBoxThree);
    menuBoxThree.appendChild(boxThreeImage);
    menuBoxThree.appendChild(boxThreeText);
    heroContent.appendChild(menuBoxFour);
    menuBoxFour.appendChild(boxFourImage);
    menuBoxFour.appendChild(boxFourText);


    const footer = document.createElement('footer');
    footer.textContent = 'Some footer text';

    content.appendChild(header);
    content.appendChild(hero);
    content.appendChild(footer);

    const homeClick = document.getElementById('home');
    homeClick.addEventListener('click', () => console.log(homeClick));
    homeClick.addEventListener('click', onPageLoad);


    const aboutClick = document.getElementById('about');
    aboutClick.addEventListener('click', () => console.log(aboutClick));
    aboutClick.addEventListener('click', aboutPageLoad);

    const contactClick = document.getElementById('contact');
    contactClick.addEventListener('click', () => console.log(contactClick));
    contactClick.addEventListener('click', contactPageLoad);

}

