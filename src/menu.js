import vegetarianPNG from './menu-img/vegetarian.png';
import avocadoPNG from './menu-img/avocado.png';
import caesarPNG from './menu-img/caesar.png';
import beefRicePNG from './menu-img/beef-rice.png';
import chickenPNG from './menu-img/chicken.png';
import tunaPNG from './menu-img/tuna.png';

export default function loadMenuPage() {

    document.querySelector('.home').classList.remove('selected');
    document.querySelector('.contact').classList.remove('selected');
    document.querySelector('.menu').classList.add('selected');

    const main = document.querySelector('main');
    main.innerHTML = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const ul = document.createElement('ul');
    ul.classList.add('menu-list');

    createItem(vegetarianPNG, 'vegetarian', '350', '6.99');
    createItem(avocadoPNG, 'avocado', '380', '9.99');
    createItem(caesarPNG, 'caesar', '480', '9.99');
    createItem(beefRicePNG, 'beef-rice', '650', '13.99');
    createItem(chickenPNG, 'chicken', '430', '7.99');
    createItem(tunaPNG, 'tuna', '400', '11.99');

    menuContainer.appendChild(ul);
    main.appendChild(menuContainer);

    function createItem(image, name, calories, price) {

        const li = document.createElement('li');
        li.classList.add(name);
        li.setAttribute('tabindex', '0');

        const png = new Image();
        png.src = image;
        png.setAttribute('height', '175');
        png.setAttribute('width', '175');

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.textContent = name;

        const itemCalories = document.createElement('div');
        itemCalories.classList.add('item-calories');
        itemCalories.textContent = `${calories} calories`;

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `\$${price}`;

        switch (name) {

            case 'vegetarian':

                png.setAttribute('alt', 'Vegetarian Salad');
                break;

            case 'avocado':

                png.setAttribute('alt', 'Avocado Salad');
                break;

            case 'caesar':

                png.setAttribute('alt', 'Caesar Salad');
                break;

            case 'beef-rice':

                png.setAttribute('alt', 'Beef and Rice Salad');
                break;

            case 'chicken':

                png.setAttribute('alt', 'Chicken Salad');
                itemPrice.textContent = '';

                const oldPrice = document.createElement('span');
                oldPrice.textContent = '$8.99';

                const newPrice = document.createElement('span');
                newPrice.textContent = `\$${price}`;
                itemPrice.appendChild(oldPrice);
                itemPrice.appendChild(newPrice);
                break;

            case 'tuna':

                png.setAttribute('alt', 'Tuna Salad');

        }

        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemCalories);
        itemInfo.appendChild(itemPrice);

        li.appendChild(png);
        li.appendChild(itemInfo);
        ul.appendChild(li);

    }

}