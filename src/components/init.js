import githubSVG from '..//inline-svg/logo-github.svg';
import codepenSVG from '..//inline-svg/logo-codepen.svg';
import linkedinSVG from '..//inline-svg/logo-linkedin.svg';

export default function init() {

    const content = document.querySelector('#content');

    // Header section

    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    function liCreator(name) {

        const li = document.createElement('li');;
        const button = document.createElement('button');
        button.classList.add(name);
        button.textContent = name;
        ul.appendChild(li).appendChild(button);

        if (name == 'home') { button.classList.add('selected') }

    }

    liCreator('home');
    liCreator('contact');
    liCreator('menu');

    content.appendChild(header).appendChild(nav).appendChild(ul);

    // Main section, starts empty. It is being filled with content by the other modules

    const main = document.createElement('main');

    // Footer section

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
    linkedin.setAttribute('href', 'https://linkedin.com/in/stanciu-dragos-4186ab186');
    linkedin.setAttribute('target', '_blank');
    linkedin.innerHTML = linkedinSVG;
    links.appendChild(linkedin);

    footer.appendChild(paragraph);
    footer.appendChild(links);

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);

}