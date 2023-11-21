import init from './components/init.js';
import loadHomePage from './components/home.js';
import './styles/normalize.css';
import './styles/style.css';
import loadContactPage from './components/contact.js';
import loadMenuPage from './components/menu.js';

init();
loadHomePage();

document.querySelector('.home').addEventListener('click', loadHomePage);
document.querySelector('.contact').addEventListener('click', loadContactPage);
document.querySelector('.menu').addEventListener('click', loadMenuPage);