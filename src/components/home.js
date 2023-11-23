import toggle from './toggler';
import loadMenuPage from './menu.js';
import heroSVG from '../img/hero.svg';

export default function loadHomePage() {

    // Add the .selected class to the button being clicked.
    document.querySelector('.home').classList.add('selected');
    const contact = document.querySelector('.contact');
    const menu = document.querySelector('.menu');
    // Remove the selected class from the other two buttons and disable user interaction
    // with said buttons.
    toggle(contact);
    toggle(menu);

    // Get the main section and set it's opacity to 0, triggering the 0.25s transition between value 1 and 0;
    const main = document.querySelector('main');
    main.style.opacity = '0';

    // After 0.5s, when the main section is fully invisible, replace all it's current content with
    // the Home page's content
    setTimeout(() => {

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

        // The "Check our menu" button of the Home page is sending the user to the
        // Menu page, similar to the 'Menu' navigation element. Hence, an identical
        // event listener is added to it at creation time.
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

    }, 500)

    // After 0.5s, when the main section contains the Home page's content,
    // make it visible again and re-allow user interaction with the other two 
    // navigation buttons
    setTimeout(() => {
        main.style.opacity = '1';
        toggle(contact);
        toggle(menu);
    }, 500)

}
