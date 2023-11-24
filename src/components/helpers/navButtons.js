import getPages from "../pages";

const ul = document.createElement('ul');
const navButtons = ul.getElementsByClassName('nav-button');

export function createNavBtns() {

    // Create a navigational button for each page and append it to an unordered list
    // Each time a new page is added in the pages.js component, this module will pick it up
    // and render it's corresponding navigational button into the header
    getPages().forEach((page) => {

        const li = document.createElement('li');

        const button = document.createElement('button');
        button.classList.add('nav-button');
        button.classList.add(page.name);
        button.textContent = page.name;
        li.appendChild(button);

        if (page.name == 'home') { button.classList.add('selected') };

        ul.appendChild(li);

    })

    return ul;

}

export function disableNavBtns(exception) {
    // Loop through each navigational button...
    for (const button of navButtons) {
        // And remove the 'selected' class from all buttons...
        button.classList.remove('selected');
        // With the exception of the current button being clicked (make sure that the 'selected' class is
        // only present on the last navigational button that was clicked, to always let the user know where 
        // he is currently being located on the webpage)...
        if (button.classList.contains(exception)) { button.classList.add('selected'); }
        // And disable input for all buttons until enableNavBtns enables it again
        button.style.cssText += 'pointer-events: none;touch-action: none';

    }

}

export function enableNavBtns() {

    // Enable input for all buttons after disableNavBtns disabled it
    for (const button of navButtons) { button.style.cssText += 'pointer-events: auto;touch-action: auto'; }

}