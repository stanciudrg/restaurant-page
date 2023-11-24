
import createHomePage from './homePage.js';
import createContactPage from './contactPage.js';
import createMenuPage from './menuPage.js';

export default function getPages() {

    class Page {

        constructor(name, creator) {

            this.name = name;
            this.creator = creator;

        }
        // Get the passed creator function and set it as an individual method on each instance
        create() { return this.creator(); }

    }

    const pages = [

        // This is where new pages can be created. The page needs a name, which is used by other modules
        // to create different functionalities, and a creator function, which needs to be declared as a
        // separate module or function and passed as an argument at object creation. The creator function/module
        // must be responsible for creating the entire DOM structure of the page. This module expects
        // for the creator function to return a DOM container that holds all the elements of the
        // said page. 
        new Page('home', createHomePage),
        new Page('contact', createContactPage),
        new Page('menu', createMenuPage),

    ]

    return pages;

}