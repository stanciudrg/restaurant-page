import heroSVG from '../img/hero.svg';
import loadMenuPage from './menu.js';

export default function loadHomePage() {

    document.querySelector('.home').classList.add('selected');
    document.querySelector('.contact').classList.remove('selected');
    document.querySelector('.menu').classList.remove('selected');

    const main = document.querySelector('main');
    main.innerHTML = '';

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const info = document.createElement('info');
    info.classList.add('info');

    const title = document.createElement('h1');

    const titleFirst = document.createElement('span');
    titleFirst.textContent = 'Salad';

    const titleSecond = document.createElement('span');
    titleSecond.textContent = 'Pack';

    title.appendChild(titleFirst);
    title.appendChild(titleSecond);

    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = 'Your top spot for healthy salads'
    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = 'Explore our selection of fresh greens, carefully picked ingredients, and delicious dressings.';

    const button = document.createElement('button');
    button.addEventListener('click', loadMenuPage);
    button.textContent = 'Check our menu';

    info.appendChild(title);
    info.appendChild(paragraphOne);
    info.appendChild(paragraphTwo);
    info.appendChild(button);

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const heroLogo = new Image();
    heroLogo.src = heroSVG;
    heroLogo.setAttribute('alt', 'SaladPack Hero Image');
    heroLogo.setAttribute('width', '550');
    heroLogo.setAttribute('height', '450');

    hero.appendChild(heroLogo);

    homeContainer.appendChild(info);
    homeContainer.appendChild(hero);

    main.appendChild(homeContainer);

}
