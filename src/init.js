import githubSVG from './inline-svg/logo-github.svg';
import codepenSVG from './inline-svg/logo-codepen.svg';
import linkedinSVG from './inline-svg/logo-linkedin.svg';

export default function init() {

    const content = document.querySelector('#content');

    // Header

    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    function liCreator(name) {

        const li = document.createElement('li');;
        const a = document.createElement('a');
        a.classList.add(name);
        a.setAttribute('href', '#');
        a.textContent = name;
        li.appendChild(a);
        ul.appendChild(li);

        if (name == 'home') { a.classList.add('selected') }

    }

    liCreator('home');
    liCreator('contact');
    liCreator('menu');

    nav.appendChild(ul);
    header.appendChild(nav);
    content.appendChild(header);

    const main = document.createElement('main');

    const footer = document.createElement('footer');

    const paragraph = document.createElement('p');
    paragraph.textContent = "© Designed by stanciudrg for The Odin Project"

    const links = document.createElement('div');
    links.classList.add('links');

    const github = document.createElement('a');
    github.setAttribute('href', 'https://github.com/stanciudrg');
    github.setAttribute('target', '_blank');
    github.innerHTML = githubSVG;
    links.appendChild(github);

    const codepen = document.createElement('a');
    codepen.setAttribute('href', 'https://codepen.io/stanciudrg');
    codepen.setAttribute('target', '_blank');
    codepen.innerHTML = codepenSVG;
    links.appendChild(codepen);

    const linkedin = document.createElement('a');
    linkedin.setAttribute('href', 'www.linkedin.com/in/stanciu-dragos-4186ab186');
    linkedin.setAttribute('target', '_blank');
    linkedin.innerHTML = linkedinSVG;
    links.appendChild(linkedin);

    footer.appendChild(paragraph);
    footer.appendChild(links);

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

}