import heroSVG from './hero.svg';

export default function loadHomePage() {

    // Main

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

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos expedita necessitatibus sequi veniam reprehenderit numquam saepe voluptatibus maxime itaque!'

    const button = document.createElement('button');
    button.textContent = 'Order at home';

    info.appendChild(title);
    info.appendChild(paragraph);
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
