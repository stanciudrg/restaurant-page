import createMenuItems from './helpers/menuItems.js';
import addDiscount from './helpers/discountAdder.js';

export default function createMenuPage() {

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const ul = document.createElement('ul');
    ul.classList.add('menu-list');
    menuContainer.appendChild(ul);

    // Loop through all properties of menuItems and append them to the ul
    const menuItems = createMenuItems();
    for (const item in menuItems) { ul.appendChild(menuItems[item]) };

    // Add a $6.99 discount to Chicken Salad
    addDiscount(menuItems.chicken, '6.99');

    return menuContainer;

}