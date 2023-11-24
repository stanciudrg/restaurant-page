import { disableNavBtns, enableNavBtns } from "./helpers/navButtons";

export default function loadPage(page) {

    // The className of all navigational buttons are equal to the name of the page objects.
    // This ensures that all pages are connected with their respective navigational buttons, and
    // allows for these types of function calls to be made.
    // The disableNavBtns takes one argument which is "exception", and then loops
    // through all navigational buttons, disabling their input and removing their 'selected' class.
    // However, when it encounters the navigational button that has the same classNAme as the exception argument,
    // it adds the 'selected' class instead of removing it.
    const currentBtnName = page.name;
    disableNavBtns(currentBtnName);

    // Get the main section and set it's opacity to 0, triggering the 0.25s transition between value 1 and 0;
    const main = document.querySelector('main');
    main.style.opacity = '0';

    // After 0.5s, when the main section is fully invisible, replace all it's current content with
    // the content of the page object that was passed to the loadPage function
    setTimeout(() => {

        main.innerHTML = '';
        main.appendChild(page.create());

    }, 500)

    // After 0.5s, when the main section contains the new content,
    // make it visible again and re-allow user interaction with the 
    // navigational buttons
    setTimeout(() => {

        main.style.opacity = '1';
        main.style.transform = 'scale(1)';
        enableNavBtns();

    }, 500)

}