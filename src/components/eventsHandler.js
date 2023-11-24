import getPages from './pages.js'
import loadPage from './pageLoader.js';

export function attachDefaultEvents() {

    // Loop through each page object, select the navigational button that corresponds to the
    // page (the classNames of all navigational button are equal to the names of the page objects),
    // and add an event listener that calls the loadPage function, passing the corresponding page object
    getPages().forEach((page) => {

        document.querySelector(`.${page.name}`).addEventListener('click', () => loadPage(page));

    });

}

export function attachEvent(element, target) {

    // A function which is used when different elements (other than
    // the navigational buttons located in header) must send the user to a page
    // If the page does not exist, do not add an event listener to prevent
    // the console from throwing errors.
    if (getPages()[target] == undefined) { return };
    element.addEventListener('click', () => loadPage(getPages()[target]));

}