import init from './init.js';
import loadHomePage from './home.js';
import './normalize.css';
import './style.css';
import loadContactPage from './contact.js';

init();
loadHomePage();

document.querySelector('.home').addEventListener('click', loadHomePage);
document.querySelector('.contact').addEventListener('click', loadContactPage);