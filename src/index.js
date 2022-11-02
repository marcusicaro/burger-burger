import {onPageLoad} from './home.js';
import {menuPageLoad} from './menu.js';
import {aboutPageLoad} from './about.js';
import {contactPageLoad} from './contact'
onPageLoad();
// menuPageLoad();
// aboutPageLoad();
// console.log('asd');
// contactPageLoad();

const homeClick = document.getElementById('home');
homeClick.addEventListener('click', () => console.log(homeClick));
homeClick.addEventListener('click', onPageLoad);

const menuClick = document.getElementById('menu');
menuClick.addEventListener('click', () => console.log(menuClick));
menuClick.addEventListener('click', menuPageLoad);

const aboutClick = document.getElementById('about');
aboutClick.addEventListener('click', () => console.log(aboutClick));
aboutClick.addEventListener('click', aboutPageLoad);

const contactClick = document.getElementById('contact');
contactClick.addEventListener('click', () => console.log(contactClick));
contactClick.addEventListener('click', contactPageLoad);