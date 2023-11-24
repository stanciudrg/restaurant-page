import { attachEvent } from './eventsHandler.js';
import heroSVG from '../img/hero.svg';

export default function createHomePage() {

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const info = document.createElement('info');
    info.classList.add('info');
    homeContainer.appendChild(info);

    const title = document.createElement('h1');
    info.appendChild(title);

    const titleFirst = document.createElement('span');
    titleFirst.textContent = 'Salad';
    title.appendChild(titleFirst);

    const titleSecond = document.createElement('span');
    titleSecond.textContent = 'Pack';
    title.appendChild(titleSecond);

    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = 'Your top spot for healthy salads';
    info.appendChild(paragraphOne);

    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = 'Explore our selection of fresh greens, carefully picked ingredients, and delicious dressings.';
    info.appendChild(paragraphTwo);

    // The "Check our menu" button of the Home page is sending the user to the
    // Menu page, similar to the 'Menu' navigation element. Hence, an 
    // event listener is attached using a special function exported by the
    // eventsHandler module
    const button = document.createElement('button');
    button.textContent = 'Check our menu';
    attachEvent(button, 2);
    info.appendChild(button);

    const hero = document.createElement('div');
    hero.classList.add('hero');
    homeContainer.appendChild(hero);

    const heroLogo = new Image();
    heroLogo.src = heroSVG;
    heroLogo.setAttribute('alt', 'SaladPack Hero Image');
    heroLogo.setAttribute('width', '550');
    heroLogo.setAttribute('height', '450');
    hero.appendChild(heroLogo);

    return homeContainer;

}